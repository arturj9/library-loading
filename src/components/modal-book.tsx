import * as Dialog from "@radix-ui/react-dialog";
import { LabelInput } from "./label-input";
import { Category } from "../types/types";
import { useState } from "react";
import { Botao } from "./botao";

export function ModalBook({ categories }: { categories: Category[] }) {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [author, setAuthor] = useState("");
  const [editor, setEditor] = useState("");
  const [quant, setQuant] = useState<number>(1);
  const [category, setCategory] = useState("");
  const [loading, setIsLoading] = useState(false);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-1 h-auto text-slate-100 bg-[#23C55E] rounded-md">
          adicionar
        </button>
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <Dialog.Portal>
        <Dialog.Content className="bg-slate-200 overflow-hidden fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-[60vh] md:max-w-[650px] w-full md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 bg-gray-500 p-1.5 text-slate-400 hover:text-slate-100">
            x
          </Dialog.Close>
          <form>
            <h6>Cadastro de Livro</h6>
            <div className="grid space-y-6 grid-cols-2 w-full p-5">
              <LabelInput
                name="Nome do livro"
                placeHolder="Digite o nome do livro"
                type="text"
                value={name}
                autoComplete="name"
                setValue={setName}
              ></LabelInput>
              <LabelInput
                name="codigo"
                placeHolder="Digite o codigo"
                type="text"
                value={code}
                autoComplete="name"
                setValue={setCode}
              ></LabelInput>
              <LabelInput
                name="autor"
                placeHolder="Digite o nome do autor"
                type="text"
                value={author}
                autoComplete="name"
                setValue={setAuthor}
              ></LabelInput>
              <LabelInput
                name="Editora"
                placeHolder="Digite o nome da editora"
                type="text"
                value={editor}
                autoComplete="name"
                setValue={setEditor}
              ></LabelInput>
              <LabelInput
                name="Quantidade"
                placeHolder="Digite a quantidade de livros"
                type="number"
                value={quant}
                autoComplete="name"
                setValue={setQuant}
              ></LabelInput>
              <div className="flex flex-col w-full">
                <span className="text-slate-600">Categoria</span>
                <select
                  onChange={(e) => setCategory(e.target.value)}
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
            <div className="w-full flex justify-center">
              <div className="w-1/3">
                <Botao
                  name="Cadastrar"
                  nameIsLoading="Cadastrando"
                  isLoading={loading}
                  type="submit"
                />
              </div>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
