import { Routes, Route } from "react-router-dom";
import { TelaInicial } from "./telas/tela-inicial";
import { TelaLogin } from "./telas/tela-login";
import { TelaCadastro } from "./telas/tela-cadastro";

export function App() {
  return (
    <Routes>
      <Route path="/" Component={TelaInicial} />
      <Route path="/login" Component={TelaLogin} />
      <Route path="/cadastro" Component={TelaCadastro} />
    </Routes>
  );
}
