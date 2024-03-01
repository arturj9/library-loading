import { Book, PageInfo } from "../types/types";
import { Rows } from "./rows";

export function ListagemLivros({books, pageInfo}:{books:Book[], pageInfo:PageInfo}) {

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

          <button className="p-1 h-auto text-slate-100 bg-[#23C55E] rounded-md">
            adicionar
          </button>
        </div>
        <Rows books={books}/>
        <div>{(pageInfo.page-1)*pageInfo.pageSize+1} até {pageInfo.pageSize} itens de {pageInfo.totalItems}</div>
      </div>
    </div>
  );
}
