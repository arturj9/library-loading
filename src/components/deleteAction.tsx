import { BookContext } from "../contexts/book";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useContext } from "react";

export function DeleteAction({
  id,
  buttonStyle,
}: {
  id: string;
  buttonStyle: string;
}): JSX.Element {
  const { deleteBook } = useContext(BookContext);

  async function onDeleteBook() {
    try {
      const result = await deleteBook(id);
      if (result instanceof AxiosError && result.response) {
        toast.error(result.response.data.message);
      } else {
        toast.success("Livro deletado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button onClick={onDeleteBook} className={buttonStyle}>
      Deletar
    </button>
  );
}
