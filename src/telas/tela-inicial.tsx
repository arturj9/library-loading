import { useEffect, useState } from "react";
import { Cabecalho } from "../components/cabecalho";
import { Filtro } from "../components/filtro";
import { Book, Category, PageInfo } from "../types/types";
import { listagemCategorias, listagemLivros } from "../services/chamadasAPI";
import { ListagemLivros } from "../components/listagem-livros";

export function TelaInicial() {
    const [categories, setCategories] = useState<Category[]>([])
    const [books, setBooks] = useState<Book[]>([])
    const [pageInfo, setPageInfo] = useState<PageInfo>({ page: 0, pageSize: 0, totalPages: 0, totalItems: 0 })
    const [currentCategoryId, setcurrentCategoryId] = useState<string | null>(null)
    const [search, setSearch] = useState<string>('');

    async function getCategories() {
        const result = await listagemCategorias()
        if (result instanceof Error) {
            console.error(result)
        }
        else {
            setCategories(result)
        }
    }

    async function getBooks() {
        const result = await listagemLivros(1,10,currentCategoryId)
        if (result instanceof Error) {
            console.error(result)
        }
        else {
            const books = result['books']
            const pageInfo = result['pageInfo']
            setBooks(books)
            setPageInfo(pageInfo)
        }
    }

    function onFilterByCategory(categoryId:string|null){
        setcurrentCategoryId(categoryId)
    }

    useEffect(() => {
        getCategories()
    }, [])

    useEffect(() => {
        getBooks()
    }, [currentCategoryId])

    return (
        <div>
            <Cabecalho />
            <Filtro categories={categories} onFilterByCategory={onFilterByCategory} />
            <ListagemLivros books={books} pageInfo={pageInfo} />
        </div>
    )
}

