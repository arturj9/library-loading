import { Book } from "../types/types";
import { RowActions } from "./row-actions";

export function Rows({ books }: { books: Book[] }) {
  return (
    <div className="overflow-x-auto overflow-scroll sm:-mx-6 ">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-sm font-light">
            <thead className="font-medium">
              <tr key="1" className="bg-[#f5f5f5]">
                <th scope="col" className="px-6 py-4 ">
                  Ações
                </th>
                <th scope="col" className="px-6 py-4">
                  Título
                </th>
                <th scope="col" className="px-6 py-4">
                  Codígo
                </th>
                <th scope="col" className="px-6 py-4">
                  Editora
                </th>
                <th scope="col" className="px-6 py-4">
                  Autor
                </th>
                <th scope="col" className="px-6 py-4">
                  Sinopse
                </th>
                <th scope="col" className="px-6 py-4">
                  Quantidade
                </th>
              </tr>
            </thead>
            <tbody>
              {books &&
                books.map((book) => {
                  return (
                    <tr key={book.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <RowActions />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.cod}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.editora}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.autor}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.sinopse}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {book.qtd}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
