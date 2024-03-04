import React from "react";
import { Input } from "../components/input";
import { Botao } from "../components/botao";

export function TelaLogin() {
  return (
    <div className="min-h-screen  flex justify-center items-center ">
      <div className="bg-white b-[#23C55E] w-1/2 h-auto flex items-center flex-col">
        <span>hi</span>
        <Input placeHolder="example@email.com" />
        <Input placeHolder="password" />
        <Botao name="Entrar" />
      </div>
    </div>
  );
}
