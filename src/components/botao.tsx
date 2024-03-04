export function Botao({ name }: { name: string }) {
  return (
    <button className="bg-[#23C55E] text-black rounded-md p-1" type="button">
      {name}
    </button>
  );
}
