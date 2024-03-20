import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Category } from "../types/types";
import { BookContext } from "./book";
import { listagemCategorias } from "../services/chamadasAPI";

interface CategoryBookContextData {
  categories: Category[];
}

interface CategoryBookProviderProps {
  children: ReactNode;
}

export const CategoryBookContext = createContext<CategoryBookContextData>(
  {} as CategoryBookContextData
);

export const CategoryBookProvider = ({
  children,
}: CategoryBookProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { setCategoryBook } = useContext(BookContext);

  async function getCategories() {
    const result = await listagemCategorias();
    if (result instanceof Error) {
      console.error(result);
    } else {
      setCategories(result);
      setCategoryBook(result[0].id);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryBookContext.Provider value={{ categories }}>
      {children}
    </CategoryBookContext.Provider>
  );
};
