import React, { ChangeEvent, useEffect, useState } from "react";
import { listagemCategorias } from "../services/chamadasAPI";

interface Category {
  id: string;
  name: string;
}

interface FiltroProps {
  onFilterByCategory: (categoryId: string) => void;
  offFilterByCategory: () => void;
  onFilterBySearch: (search: string) => void;
}

export function Filtro({
  onFilterByCategory,
  offFilterByCategory,
  onFilterBySearch,
}: FiltroProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    listagemCategorias().then((response) => {
      setCategories(response["booksCategories"]);
    });
  }, []);

  function handleCategory(event: ChangeEvent<HTMLSelectElement>) {
    setSelectedValue(event.target.value);
    if (event.target.value != "") {
      onFilterByCategory(event.target.value);
    } else offFilterByCategory();
  }

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    onFilterBySearch(event.target.value);
  }

  return (
    <div className=" m-4 h-39 p-3 bg-white rounded-md shadow-md">
      <p className="font-bold">Filtros</p>
      <div className="mt-2 grid-cols-2 flex">
        <div className="flex w-3/4 flex-col ">
          <span className="text-slate-800">
            Pesquisa{" "}
            <span className="text-slate-400">
              (titulo, código, editora, autor)
            </span>
          </span>
          <input
            type="text"
            value={search}
            placeholder="Pesquisar..."
            className="text-slate-950 w-3/4 outline-none ring-1 ring-offset-1 ring-slate-800 rounded-sm p-1"
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-col w-1/4  ">
          <span className="text-slate-600">Livro Categoria</span>
          <select
            value={selectedValue}
            onChange={handleCategory}
            name="test"
            className="bg-white w-10/12 p-1  border-slate-500 outline-none ring-1 ring-offset-1 ring-slate-800 rounded-sm"
          >
            <option value="">Todos</option>
            {categories.length > 0 ? (
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })
            ) : (
              <option className="hidden" value="">
                Nenhuma
              </option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
