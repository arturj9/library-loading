import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TelaLogin } from "./telas/tela-login";
import { TelaCadastro } from "./telas/tela-cadastro";
import { TelaInicial } from "./telas/tela-inicial";
import { useContext } from "react";
import { AuthContext } from "./contexts/auth";


export function App() {
  const { signed } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={!signed ? <TelaLogin /> : <Navigate to="/" />} />
        <Route path="/cadastro" element={!signed ? <TelaCadastro /> : <Navigate to="/" />} />
        <Route path="/" element={signed ? <TelaInicial /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}
