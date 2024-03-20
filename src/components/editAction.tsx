import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import { BookContext } from "../contexts/book";
import { FormEvent, useContext } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { ModalBook } from "./modal-book";
import { CategoryBookContext } from "../contexts/categories";
import { Category } from "../types/types";

export function EditAction({
  id,
  buttonStyle,
  categories,
}: {
  id: string;
  buttonStyle: string;
  categories: Category[];
}): JSX.Element {
  const { handleEditBook } = useContext(BookContext);

  async function onEditBook(e: FormEvent) {
    await handleEditBook(id, e);
  }

  return (
    <ModalBook
      nameButtonVisible="Editar"
      buttonStyle={buttonStyle}
      nameModal="Atualizar Livro"
      nameButton="Atualizar"
      categories={categories}
      handleSubmit={onEditBook}
      nameButtonIsLoading="Atualiznado"
    />
  );
}
