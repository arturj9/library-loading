import { api } from "./api";

export async function listagemCategorias() {
    try {
        const response = await api.get("books/categories/");
        return response.data['booksCategories'];
    } catch (error) {
        return error
    }
}

export async function listagemLivros(page: number = 1,
    pageSize: number = 10, categoryId:string) {
    try {
        const response = await api.get("books/list/", {
            params: {
                page,
                pageSize,
                search:categoryId
            }
        });
        return response.data;
    } catch (error) {
        return error
    }
}