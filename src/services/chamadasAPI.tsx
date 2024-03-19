import { AxiosError } from "axios";
import { api } from "./api";
import { useParams } from "react-router-dom";

export async function listagemCategorias() {
  try {
    const response = await api.get("books/categories/");
    return response.data["booksCategories"];
  } catch (error: AxiosError | any) {
    return error;
  }
}

export async function listagemLivros(
  page: number,
  pageSize: number,
  categoryId: string,
  search: string
) {
  try {
    const response = await api.get("books/listByUser/", {
      params: {
        page,
        pageSize,
        search,
        categoryId,
      },
    });
    return response.data;
  } catch (error: AxiosError | any) {
    return error;
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await api.post("auth/login/", {
      email,
      password,
    });
    return response.data["token"];
  } catch (error: AxiosError | any) {
    return error;
  }
}

export async function cadastro(
  name: string,
  username: string,
  email: string,
  password: string
) {
  try {
    const response = await api.post("auth/register/", {
      name,
      username,
      email,
      password,
    });
    return response.data;
  } catch (error: AxiosError | any) {
    return error;
  }
}

export async function verifyToken(token: string | null) {
  if (token) {
    try {
      const response = await api.get("auth/verify/", {
        params: {
          token,
        },
      });
      return response.data["tokenIsValid"];
    } catch (error: AxiosError | any) {
      return false;
    }
  } else {
    return false;
  }
}

export async function registerBook(
  nameBook: string,
  codeBook: string,
  authorBook: string,
  editorBook: string,
  quantBook: string,
  categoryBook: string,
  sinopseBook: string
) {
  try {
    const response = await api.post("books/register/", {
      title: nameBook,
      cod: codeBook,
      editora: editorBook,
      autor: authorBook,
      sinopse: sinopseBook,
      bookCategoryId: categoryBook,
      qtd: parseInt(quantBook),
    });
    return response.data;
  } catch (error: AxiosError | any) {
    console.error(error);
    return error;
  }
}
export async function deleteBook(id: string): Promise<object | string> {
  try {
    const response = await api.delete("books/delete/", {
      params: { id },
    });
    return response;
  } catch (error: AxiosError | any) {
    return error;
  }
}
