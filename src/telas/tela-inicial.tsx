import { FormEvent, useContext, useEffect, useState } from "react";
import { Cabecalho } from "../components/cabecalho";
import { Filtro } from "../components/filtro";
import { Book, Category, PageInfo } from "../types/types";
import {
  listagemCategorias,
  listagemLivros,
  registerBook,
} from "../services/chamadasAPI";
import { ListagemLivros } from "../components/listagem-livros";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { BookContext } from "../contexts/book";
import { CategoryBookContext } from "../contexts/categories";

export function TelaInicial() {
  const { books, setBooks } = useContext(BookContext);
  const { categories } = useContext(CategoryBookContext);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    page: 0,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0,
  });
  const [currentCategoryId, setcurrentCategoryId] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  async function getBooks() {
    const result = await listagemLivros(page, 10, currentCategoryId, search);
    if (result instanceof Error) {
      console.error(result);
    } else {
      const books = result["books"];
      const pageInfo = result["pageInfo"];
      setBooks(books);
      setPageInfo(pageInfo);
    }
  }

  function onFilterByCategory(categoryId: string) {
    setPage(1);
    setcurrentCategoryId(categoryId);
  }

  function onFilterBySearch(search: string) {
    setPage(1);
    setSearch(search);
  }

  function nextPage() {
    if (page + 1 <= pageInfo.totalPages) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page - 1 > 0) {
      setPage(page - 1);
    }
  }

  useEffect(() => {
    getBooks();
  }, [currentCategoryId, search, page, books]);

  return (
    <div>
      <Cabecalho />
      <Filtro
        categories={categories}
        onFilterByCategory={onFilterByCategory}
        onFilterBySearch={onFilterBySearch}
      />
      <ListagemLivros
        categories={categories}
        books={books}
        pageInfo={pageInfo}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
