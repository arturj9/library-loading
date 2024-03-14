import { FormEvent, useEffect, useState } from "react";
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

  const [nameBook, setNameBook] = useState("");
  const [codeBook, setCodeBook] = useState("");
  const [authorBook, setAuthorBook] = useState("");
  const [editorBook, setEditorBook] = useState("");
  const [quantBook, setQuantBook] = useState<number>(1);
  const [categoryBook, setCategoryBook] = useState("");
  const [loadingModalBook, setIsLoadingModalBook] = useState(false);
  const [sinopseBook, setSinopseBook] = useState("");

  async function getCategories() {
    const result = await listagemCategorias();
    if (result instanceof Error) {
      console.error(result);
    } else {
      setCategories(result);
      setCategoryBook(result[0].id);
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
  async function handleRegisterBook(e: FormEvent) {
    e.preventDefault();
    try {
      setIsLoadingModalBook(true);
      const result = await registerBook(
        nameBook,
        codeBook,
        authorBook,
        editorBook,
        quantBook.toString(),
        categoryBook,
        sinopseBook
      );
      if (result instanceof AxiosError && result.response) {
        toast.error(result.response.data.message);
      } else {
        toast.success("Livro cadastrado com sucesso!");
        setNameBook("");
        setCodeBook("");
        setAuthorBook("");
        setEditorBook("");
        setQuantBook(1);
        setSinopseBook("");
      }
    } finally {
      setIsLoadingModalBook(false);
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
        handleSubmit={handleRegisterBook}
        name={nameBook}
        setName={setNameBook}
        code={codeBook}
        setCode={setCodeBook}
        author={authorBook}
        setAuthor={setAuthorBook}
        editor={editorBook}
        setEditor={setEditorBook}
        quant={quantBook}
        setQuant={setQuantBook}
        category={categoryBook}
        setCategory={setCategoryBook}
        loading={loadingModalBook}
        setIsLoading={setIsLoadingModalBook}
        sinopse={sinopseBook}
        setSinopse={setSinopseBook}
        categories={categories}
        books={books}
        pageInfo={pageInfo}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
