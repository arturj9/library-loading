import React from "react";
import { Input } from "../components/input";
import { Botao } from "../components/botao";

export function TelaLogin() {
  return (
    <div className="min-h-screen  flex justify-center items-center ">
      <div className="rounded-md bg-white border-t-[#23C55E] border-t-2 w-1/2 h-auto flex items-center flex-col shadow-md">
        <span>hi</span>
        <Input placeHolder="example@email.com" />
        <Input placeHolder="password" />
        <Botao name="Entrar" />
      </div>
    </div>
  );
}
