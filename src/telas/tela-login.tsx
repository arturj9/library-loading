import { FormEvent, useContext, useState } from "react";
import { Botao } from "../components/botao";
import { LabelInput } from "../components/label-input";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export function TelaLogin() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    if (!email) {
      console.log("entrei");
      toast.error("Informe o e-mail");
    } else if (!password) {
      toast.error("Informe a senha");
    } else if (password.length < 6) {
      toast.error("Senha deve ser maior que 6 caracteres");
    } else {
      try {
        setIsLoading(true);
        const result = await login(email, password);
        if (result instanceof AxiosError && result.response) {
          toast.error(result.response.data.message);
        } else {
          localStorage.setItem("token", result.toString());
          window.location.reload()
        }
      } finally {
        setIsLoading(false);
      }
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-4 bg-white border-t-[#23C55E] border-t-2 rounded-md max-w-md w-full space-y-8">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center text-3xl font-extrabold text-slate-700">
            Login
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 flex items-center justify-center flex-col"
          onSubmit={handleLogin}
        >
          <LabelInput
            name="E-mail"
            placeHolder="example@email.com"
            type="email"
            autoComplete="email"
            value={email}
            setValue={setEmail}
          />
          <LabelInput
            name="Senha"
            placeHolder="senha"
            type="password"
            autoComplete="current-password"
            value={password}
            setValue={setPassword}
          />
          <div className="w-11/12">
            <Botao
              name="Entrar"
              nameIsLoading="Entrando"
              isLoading={loading}
              type="submit"
            />
          </div>
        </form>
        <div className="text-right">
          <Link className="text-blue-700 underline" to="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
