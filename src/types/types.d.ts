export type Book = {
  id: string;
  title: string;
  cod: string;
  editora: string;
  autor: string;
  sinopse: string;
  qtd: number;
  bookCategoryId: string;
};

export type Category = {
  id: string;
  name: string;
};

export type PageInfo = {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
};
