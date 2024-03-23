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
  handleEditBook(e: FormEvent, book: Book): Promise<void>;
  defaultValues(): void;
  setValues(nameBook: string, codeBook: string, authorBook: string, editorBook: string,
  quantBook: number, categoryBook: string, sinopseBook: string): void;
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

  function defaultValues() {
    setNameBook("");
    setCodeBook("");
    setAuthorBook("");
    setEditorBook("");
    setQuantBook(1);
    setCategoryBook(books[0].bookCategoryId);
    setSinopseBook("");
  }

  function setValues(nameBook: string, codeBook: string, authorBook: string, editorBook: string,
    quantBook: number, categoryBook: string, sinopseBook: string) {
    setNameBook(nameBook);
    setCodeBook(codeBook);
    setAuthorBook(authorBook);
    setEditorBook(editorBook);
    setQuantBook(quantBook);
    setCategoryBook(categoryBook);
    setSinopseBook(sinopseBook);

  }

  async function handleEditBook(e: FormEvent, book: Book) {
    e.preventDefault();
    if (book.title == nameBook && book.cod == codeBook && book.autor == authorBook &&
      book.editora == editorBook && book.qtd == quantBook && book.bookCategoryId == categoryBook &&
      book.sinopse == sinopseBook) {
      toast.error("Altere pelo menos um campo!");
    } else {
      const newNameBook = book.title == nameBook ? null : nameBook;
      const newCodeBook = book.cod == codeBook ? null : codeBook;
      const newAuthorBook = book.autor == authorBook ? null : authorBook;
      const newEditorBook = book.editora == editorBook ? null : editorBook;
      const newQuant = book.qtd == quantBook ? null : quantBook.toString();
      const newCategoryBook = book.bookCategoryId == categoryBook ? null : categoryBook;
      const newSinopseBook = book.sinopse == sinopseBook ? null : sinopseBook;
      try {
        const result = await editBook(
          book.id,
          newNameBook,
          newCodeBook,
          newAuthorBook,
          newEditorBook,
          newQuant,
          newCategoryBook,
          newSinopseBook
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
        defaultValues()
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
        defaultValues,
        setValues
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
