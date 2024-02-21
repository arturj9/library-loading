import { useEffect, useState } from "react"
import { listagemLivros } from "../services/chamadasAPI"
import { RowActions } from "./row-actions"
import { Filtro } from "./filtro"

interface Book {
  id: string
  title: string
  cod: string
  editora: string
  autor: string
  sinopse: string
  qtd: number
  bookCategoryId: string
}

export function Tabela() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    listagemLivros().then((response) => {
      setBooks(response['books']);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  let filterBooks = books

  function onFilterByCategory(categoryId: string) {
    const filterBooks = books.filter(book => {book.bookCategoryId == categoryId})
    setBooks(filterBooks)
  }

  function offFilterByCategory() {
    listagemLivros().then((response) => {
      setBooks(response['books']);
    }).catch((error) => {
      console.log(error)
    })
  }
  console.log(filterBooks)

  return (
    <div>
      <Filtro onFilterByCategory={onFilterByCategory} offFilterByCategory={offFilterByCategory} />
      <div className="flex flex-col m-3 bg-white rounded-md p-3">
        <div className="flex justify-between">
          <div className='flex flex-wrap text-[#23C55E] font-bold'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <span >Livros</span>
          </div>

          <button className='p-1 h-auto text-slate-100 bg-[#23C55E] rounded-md'>adicionar</button>
        </div>
        <div className="overflow-x-auto sm:-mx-6">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="font-medium">
                  <tr key="1" className="bg-[#f5f5f5]">
                    <th scope="col" className="px-6 py-4">Ações</th>
                    <th scope="col" className="px-6 py-4">Título</th>
                    <th scope="col" className="px-6 py-4">Codígo</th>
                    <th scope="col" className="px-6 py-4">Editora</th>
                    <th scope="col" className="px-6 py-4">Autor</th>
                    <th scope="col" className="px-6 py-4">Sinopse</th>
                    <th scope="col" className="px-6 py-4">Quantidade</th>
                  </tr>
                </thead>
                <tbody>
                  {books.length > 0 ? books.map(book => {
                    return (
                      <tr key={book.id}>
                        <td className="whitespace-nowrap px-6 py-4"><RowActions /></td>
                        <td className="whitespace-nowrap px-6 py-4">{book.title}</td>
                        <td className="whitespace-nowrap px-6 py-4">{book.cod}</td>
                        <td className="whitespace-nowrap px-6 py-4">{book.editora}</td>
                        <td className="whitespace-nowrap px-6 py-4">{book.autor}</td>
                        <td className="whitespace-nowrap px-6 py-4">{book.sinopse}</td>
                        <td className="whitespace-nowrap px-6 py-4">{book.qtd}</td>
                      </tr>
                    )
                  }) : (
                    <tr>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}