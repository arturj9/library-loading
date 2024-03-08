import { AxiosError } from "axios";
import { api } from "./api";

export async function listagemCategorias() {
    try {
        const response = await api.get("books/categories/");
        return response.data['booksCategories'];
    } catch (error: AxiosError | any) {
        return error
    }
}

export async function listagemLivros(page: number,
    pageSize: number, categoryId: string, search: string) {
    try {
        const response = await api.get("books/listByUser/", {
            params: {
                page,
                pageSize,
                search,
                categoryId
            }
        });
        return response.data;
    } catch (error: AxiosError | any) {
        return error
    }
}

export async function login(email: string, password: string) {
    try {
        const response = await api.post("auth/login/", {
            email,
            password
        });
        return response.data;
    } catch (error: AxiosError | any) {
        return error
    }
}

export async function cadastro(name: string, username: string, email: string, password: string) {
    try {
        const response = await api.post("auth/register/", {
            name,
            username,
            email,
            password
        });
        return response.data;
    } catch (error: AxiosError | any) {
        return error
    }
}

export async function verifyToken(token: string | null) {
    if (token) {
        try {
            const response = await api.get("auth/verify/", {
                params: {
                    token
                }
            });
            return response.data['tokenIsValid'];
        } catch (error: AxiosError | any) {
            return false
        }
    }
    else {
        return false
    }
}

