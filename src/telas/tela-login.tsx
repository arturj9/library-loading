import { FormEvent, useState } from "react";
import { Input } from "../components/input";
import { Botao } from "../components/botao";
import { login } from "../services/chamadasAPI";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export function TelaLogin() {
  const navigation = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  async function handleLogin(event: FormEvent) {
    if (!email) {
      event.preventDefault()
      toast.error("Informe o e-mail");
    } else if (!password) {
      event.preventDefault()
      toast.error("Informe a senha");
      event.preventDefault()
    } else if (password.length < 6) {
      event.preventDefault()
      toast.error("Senha deve ser maior que 6 caracteres");
    } else {
      try {
        setIsLoading(true);
        const result = await login(email, password);
        console.log(result)
        if (result instanceof AxiosError && result.response) {
          event.preventDefault()
          toast.error(result.response.data.message);
        } else {
          localStorage.setItem("token", result.token);
          if (localStorage.getItem("token")) {
            console.log('hhh')
            navigation('/')
          }

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
          <h2 className="text-center text-3xl font-extrabold text-slate-700">Login</h2>
        </div>
        <form className="mt-8 space-y-6 flex items-center justify-center flex-col" onSubmit={handleLogin}>
          <div className="w-11/12 rounded-md shadow-sm -space-y-px">
            <span className="text-slate-700">E-mail</span>
            <div>
              <Input placeHolder="example@email.com" type="email" autoComplete="email" value={email} setValue={setEmail} />
            </div>
          </div>
          <div className="w-11/12 rounded-md shadow-sm -space-y-px">
            <span className="text-slate-700">Senha</span>
            <div>
              <Input placeHolder="senha" type="password" autoComplete="current-password" value={password} setValue={setPassword} />
            </div>
          </div>
          <div className="w-11/12">
            <Botao name="Entrar" nameIsLoading="Entrando" isLoading={loading} type="submit" />
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
