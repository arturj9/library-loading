import { useEffect, useState } from "react";
import { Cabecalho } from "../components/cabecalho";
import { Filtro } from "../components/filtro";
import { Book, Category, PageInfo } from "../types/types";
import { listagemCategorias, listagemLivros } from "../services/chamadasAPI";
import { ListagemLivros } from "../components/listagem-livros";

export function TelaInicial() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState<PageInfo>({
    page: 0,
    pageSize: 0,
    totalItems: 0,
    totalPages: 0,
  });
  const [currentCategoryId, setcurrentCategoryId] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  async function getCategories() {
    const result = await listagemCategorias();
    if (result instanceof Error) {
      console.error(result);
    } else {
      setCategories(result);
    }
  }

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
    getCategories();
  }, []);

  useEffect(() => {
    getBooks();
  }, [currentCategoryId, search, page]);

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
