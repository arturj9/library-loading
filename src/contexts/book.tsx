import { FormEvent, ReactNode, createContext, useState } from "react";
import { deleteBook, editBook, registerBook } from "../services/chamadasAPI";
import { Book } from "../types/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface BookContextData {
  deleteBook(id: string): Promise<object | string>;
  books: Book[];
  setBooks(books: Book[]): void;
  nameBook: string;
  setNameBook(nameBook: string): void;
  codeBook: string;
  setCodeBook(codeBook: string): void;
  authorBook: string;
  setAuthorBook(authorBook: string): void;
  editorBook: string;
  setEditorBook(editorBook: string): void;
  quantBook: number;
  setQuantBook(quantBook: number): void;
  categoryBook: string;
  setCategoryBook(categoryBook: string): void;
  sinopseBook: string;
  setSinopseBook(sinopseBook: string): void;
  isLoadingModalBook: boolean;
  setIsLoadingModalBook(value: boolean): void;
  handleRegisterBook(e: FormEvent): Promise<void>;
  handleEditBook(id: string, e: FormEvent): Promise<void>;
}

interface BookProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<BookContextData>(
  {} as BookContextData
);

export const BookProvider = ({ children }: BookProviderProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [nameBook, setNameBook] = useState("");
  const [codeBook, setCodeBook] = useState("");
  const [authorBook, setAuthorBook] = useState("");
  const [editorBook, setEditorBook] = useState("");
  const [quantBook, setQuantBook] = useState<number>(1);
  const [categoryBook, setCategoryBook] = useState("");
  const [sinopseBook, setSinopseBook] = useState("");
  const [isLoadingModalBook, setIsLoadingModalBook] = useState(false);

  async function handleEditBook(id: string, e: FormEvent) {
    e.preventDefault();
    try {
      const result = await editBook(
        id,
        nameBook,
        codeBook,
        authorBook,
        editorBook,
        quantBook.toString(),
        categoryBook,
        sinopseBook
      );
      if (result instanceof AxiosError && result.response) {
        toast.error(result.response.data.message);
      } else {
        toast.success("Livro atualizado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleRegisterBook(e: FormEvent) {
    e.preventDefault();
    try {
      setIsLoadingModalBook(true);
      const result = await registerBook(
        nameBook,
        codeBook,
        authorBook,
        editorBook,
        quantBook.toString(),
        categoryBook,
        sinopseBook
      );
      if (result instanceof AxiosError && result.response) {
        toast.error(result.response.data.message);
      } else {
        toast.success("Livro cadastrado com sucesso!");
        setNameBook("");
        setCodeBook("");
        setAuthorBook("");
        setEditorBook("");
        setQuantBook(1);
        setSinopseBook("");
      }
    } finally {
      setIsLoadingModalBook(false);
    }
  }

  return (
    <BookContext.Provider
      value={{
        deleteBook,
        handleRegisterBook,
        books,
        setBooks,
        nameBook,
        setNameBook,
        codeBook,
        setCodeBook,
        authorBook,
        setAuthorBook,
        editorBook,
        setEditorBook,
        quantBook,
        setQuantBook,
        categoryBook,
        setCategoryBook,
        sinopseBook,
        setSinopseBook,
        isLoadingModalBook,
        setIsLoadingModalBook,
        handleEditBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
