import { ClipLoader } from 'react-spinners';

export function Botao({ name, nameIsLoading, type, isLoading }:
  {
    name: string,
    nameIsLoading: string,
    type: "submit" | "reset" | "button" | undefined,
    isLoading: boolean
  }) {
  return (
    <button
      type={type}
      className="bg-[#23C55E] text-white group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md hover:bg-[#24633b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#24633b]"
    >
      {isLoading ? (
        <>
          <ClipLoader className='my-auto mr-1' size={14} color={"#ffffff"} loading={true} />
          {nameIsLoading}
        </>
      ) : name}

    </button>

  );
}
