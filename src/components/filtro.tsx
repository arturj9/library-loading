import { Category } from "../types/types";

export function Filtro({
  categories,
  onFilterByCategory,
  onFilterBySearch,
}: {
  categories: Category[];
  onFilterByCategory: (categoryId: string) => void;
  onFilterBySearch: (search: string) => void;
}) {
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
            placeholder="Pesquisar..."
            className="text-slate-950 w-3/4 outline-none ring-1 ring-offset-1 ring-slate-800 rounded-sm p-1"
            onChange={(e) => onFilterBySearch(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/4  ">
          <span className="text-slate-600">Livro Categoria</span>
          <select
            onChange={(e) => onFilterByCategory(e.target.value)}
            name="test"
            className="bg-white w-10/12 p-1  border-slate-500 outline-none ring-1 ring-offset-1 ring-slate-800 rounded-sm"
          >
            <option value="">Todos</option>
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
}
