import {
  TEDropdown,
  TEDropdownToggle,
  TEDropdownMenu,
  TEDropdownItem,
  TERipple,
} from "tw-elements-react";
import { BookContext } from "../contexts/book";
import { useContext } from "react";
import { toast } from "sonner";
import { AxiosError } from "axios";

export function RowActions({ id }: { id: string }): JSX.Element {
  const { deleteBook } = useContext(BookContext);
  async function onDeleteBook() {
    try {
      const result = await deleteBook(id);
      if (result instanceof AxiosError && result.response) {
        console.error(result.response);
        toast.error(result.response.data.message);
      } else {
        toast.success("Livro deletado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <TEDropdown>
      <TERipple rippleColor="light">
        <TEDropdownToggle className="flex items-center whitespace-nowrap rounded bg-[#23C55E] pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] motion-reduce:transition-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu position="dropup">
        <TEDropdownItem>
          <button
            onClick={onDeleteBook}
            className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
          >
            Excluir
          </button>
        </TEDropdownItem>
        <TEDropdownItem>
          <button className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
            Editar
          </button>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
}
