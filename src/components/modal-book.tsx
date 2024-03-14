import * as Dialog from "@radix-ui/react-dialog";
import { LabelInput } from "./label-input";
import { Category } from "../types/types";
import { Botao } from "./botao";
import { FormEvent } from "react";

export function ModalBook({
  name,
  setName,
  code,
  setCode,
  author,
  setAuthor,
  editor,
  setEditor,
  quant,
  setQuant,
  category,
  setCategory,
  loading,
  setIsLoading,
  sinopse,
  setSinopse,
  nameButton,
  nameButtonIsLoading,
  categories,
  nameModal,
  handleSubmit,
}: {
  name: string;
  setName: (name: string) => void;
  code: string;
  setCode: (code: string) => void;
  author: string;
  setAuthor: (author: string) => void;
  editor: string;
  setEditor: (editor: string) => void;
  quant: number;
  setQuant: (quant: number) => void;
  category: string;
  setCategory: (category: string) => void;
  loading: boolean;
  setIsLoading: (loading: boolean) => void;
  sinopse: string;
  setSinopse: (sinopse: string) => void;
  nameButton: string;
  nameButtonIsLoading: string;
  categories: Category[];
  nameModal: string;
  handleSubmit: (event: FormEvent) => Promise<void>;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="p-1 h-auto text-slate-100 bg-[#23C55E] rounded-md">
          adicionar
        </button>
      </Dialog.Trigger>
      <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <Dialog.Portal>
        <Dialog.Content className="bg-slate-200 overflow-hidden fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:h-[70vh] md:max-w-[650px] w-full md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-200 text-[#23C55E] p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Dialog.Close>
          <form onSubmit={async (e) => await handleSubmit(e)}>
            <h6 className="font-semibold text-lg flex justify-center pt-2">
              {nameModal}
            </h6>
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
                  value={category}
                  className="bg-white w-10/12 p-1  border-slate-500 outline-none ring-1 ring-offset-1 ring-slate-800 rounded-sm"
                >
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
              <div className="mt-6 w-11/12 rounded-md shadow-sm -space-y-px">
                <span className="text-slate-700">Sinopse</span>
                <textarea
                  onChange={(e) => setSinopse(e.target.value)}
                  value={sinopse}
                  name="sinopse"
                  className="appearance-none w-full relative block px-3 py-2 border border-slate-400 placeholder-slate-600 text-slate-900 focus:outline-none focus:ring-slate-500 focus:border-slate-500 focus:z-10 sm:text-sm rounded-md shadow-sm"
                ></textarea>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-1/3">
                <Botao
                  name={nameButton}
                  nameIsLoading={nameButtonIsLoading}
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
