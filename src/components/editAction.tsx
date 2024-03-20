import { BookContext } from "../contexts/book";
import { FormEvent, useContext } from "react";
import { ModalBook } from "./modal-book";
import { Book, Category } from "../types/types";

export function EditAction({
  book,
  categories,
}: {
  book: Book;
  buttonStyle: string;
  categories: Category[];
}): JSX.Element {

  const { handleEditBook, setValues } = useContext(BookContext);

  async function onEditBook(e: FormEvent) {
    await handleEditBook(e, book);
  }

  function handleSetValues() {
    setValues(book.title, book.cod, book.autor, book.editora, book.qtd, book.bookCategoryId, book.sinopse)
  }

  return (
    <ModalBook
      handleOpen={() => handleSetValues()}
      nameButtonVisible="Editar"
      nameModal="Atualizar Livro"
      nameButton="Atualizar"
      categories={categories}
      handleSubmit={onEditBook}
      nameButtonIsLoading="Atualiznado"
    />
  );
}
