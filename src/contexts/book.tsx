import { ReactNode, createContext } from "react";
import { deleteBook } from "../services/chamadasAPI";

interface BookContextData {
  deleteBook(id: string): Promise<object | string>;
}

interface BookProviderProps {
  children: ReactNode;
}

export const BookContext = createContext<BookContextData>(
  {} as BookContextData
);

export const BookProvider = ({ children }: BookProviderProps) => {
  return (
    <BookContext.Provider value={{ deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};
