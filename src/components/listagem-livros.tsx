import { Book, Category, PageInfo } from "../types/types";
import { Rows } from "./rows";
import "@radix-ui/themes/styles.css";
import { ModalBook } from "./modal-book";
import { FormEvent, useContext } from "react";
import { BookContext } from "../contexts/book";

export function ListagemLivros({
  books,
  pageInfo,
  nextPage,
  prevPage,
  categories,
}: {
  books: Book[];
  pageInfo: PageInfo;
  nextPage: () => void;
  prevPage: () => void;
  categories: Category[];
}) {
  const { handleRegisterBook, defaultValues } = useContext(BookContext);
  async function onRegisterBook(e: FormEvent) {
    await handleRegisterBook(e);
  }
  return (
    <div>
      <div className="flex flex-col m-3 bg-white rounded-md p-3">
        <div className="flex justify-between">
          <div className="flex flex-wrap text-[#23C55E] font-bold">
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
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>Livros</span>
          </div>

          <ModalBook
            nameButtonVisible="Adicionar"
            categories={categories}
            nameModal="Cadastro de livro"
            nameButton="Cadastrar"
            nameButtonIsLoading="Cadastrando"
            handleSubmit={onRegisterBook}
            handleOpen={defaultValues}
          />
        </div>
        <div className="overflow-hidden">
          <Rows books={books} />
        </div>
        <div className="flex justify-between p-2">
          <div className="">
            {pageInfo.totalItems ? (
              <div className="">
                {(pageInfo.page - 1) * pageInfo.pageSize + 1} até{" "}
                {(pageInfo.page - 1) * pageInfo.pageSize + books.length} de{" "}
                {pageInfo.totalItems} itens
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="flex justify-between w-20">
            {pageInfo.page > 1 ? (
              <button className="text-[#23C553] " onClick={() => prevPage()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                </svg>
              </button>
            ) : (
              <button disabled onClick={() => prevPage()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.712 4.818A1.5 1.5 0 0 1 10 6.095v2.972c.104-.13.234-.248.389-.343l6.323-3.906A1.5 1.5 0 0 1 19 6.095v7.81a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.505 1.505 0 0 1-.389-.344v2.973a1.5 1.5 0 0 1-2.288 1.276l-6.323-3.905a1.5 1.5 0 0 1 0-2.552l6.323-3.906Z" />
                </svg>
              </button>
            )}

            {pageInfo.page < pageInfo.totalPages || (pageInfo.page - 1) * pageInfo.pageSize + 1 < (pageInfo.page - 1) * pageInfo.pageSize + books.length ? (
            <button className="text-[#23C553]" onClick={() => nextPage()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z" />
              </svg>
            </button>
            ) : (
            <button disabled onClick={() => nextPage()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M3.288 4.818A1.5 1.5 0 0 0 1 6.095v7.81a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905c.155-.096.285-.213.389-.344v2.973a1.5 1.5 0 0 0 2.288 1.276l6.323-3.905a1.5 1.5 0 0 0 0-2.552l-6.323-3.906A1.5 1.5 0 0 0 10 6.095v2.972a1.506 1.506 0 0 0-.389-.343L3.288 4.818Z" />
              </svg>
            </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
