import { api } from "./api";

export async function listagemCategorias(){
    try{
        const response = await api.get("books/categories/");
        return response.data;
    }catch(error){
        return ("Error ao encontrar" + error)
    }
}

export async function listagemLivros(){
    try{
        const response = await api.get("books/list/");
        return response.data;
    }catch(error){
        return ("Error ao encontrar" + error)
    }
}