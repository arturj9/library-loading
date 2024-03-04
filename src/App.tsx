import { Routes, Route } from "react-router-dom";
import { TelaInicial } from "./telas/tela-inicial";
import { TelaLogin } from "./telas/tela-login";

export function App() {
  return (
    <Routes>
      <Route path="/" Component={TelaInicial} />
      <Route path="/login" Component={TelaLogin} />
    </Routes>
  );
}
