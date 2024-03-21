import { FormEvent, useState } from "react";
import { Botao } from "../components/botao";
import { cadastro } from "../services/chamadasAPI";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { LabelInput } from "../components/label-input";

export function TelaCadastro() {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");
  const [loading, setIsLoading] = useState(false);

  async function handleCadastro(event: FormEvent) {
    event.preventDefault();
    if (!name) {
      toast.error("informe o nome!");
    } else if (!username) {
      toast.error("informe o nome de usuário!");
    } else if (username.length < 3) {
      toast.error("nome de usuario deve ser maior que 6 caracteres!");
    } else if (!email) {
      toast.error("informe seu e-mail!");
    } else if (!emailRepeat) {
      toast.error("confirme seu e-mail!");
    } else if (email != emailRepeat) {
      toast.error("e-mails não são iguais!");
    } else if (!password) {
      toast.error("informe sua senha!");
    } else if (password.length < 6) {
      toast.error("senha deve ser maior que 6 caracteres!");
    } else if (!passwordRepeat) {
      toast.error("confirme sua senha!");
    } else if (passwordRepeat.length < 6) {
      toast.error("confirme sua senha!");
    } else if (password != passwordRepeat) {
      toast.error("as senhas não são iguais!");
    } else {
      try {
        setIsLoading(true);
        const result = await cadastro(name, username, email, password);
        console.log(result);
        if (result instanceof AxiosError && result.response) {
          toast.error(result.response.data.message);
        } else {
            navigation("/login");
        }
      } finally {
        setIsLoading(false);
      }
    }
  }
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-white border-t-[#23C55E] border-t-2 rounded-md max-w-3xl w-full space-y-9">
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-center text-3xl font-extrabold text-slate-700">
              Cadastro
            </h2>
          </div>
          <form
            className="space-y-6 flex items-center justify-center flex-col"
            onSubmit={handleCadastro}
          >
            <div className="grid space-y-6 grid-cols-2 w-full">
              <LabelInput
                name="Nome Completo"
                placeHolder="Digite seu nome completo"
                type="text"
                autoComplete="name"
                value={name}
                setValue={setName}
              ></LabelInput>
              <LabelInput
                name="Nome de Usuário"
                placeHolder="Digite seu nome de usuário"
                type="text"
                autoComplete="name"
                value={username}
                setValue={setUsername}
              ></LabelInput>
              <LabelInput
                name="E-mail"
                placeHolder="Digite seu e-mail"
                type="text"
                autoComplete="email"
                value={email}
                setValue={setEmail}
              ></LabelInput>
              <LabelInput
                name="Confirmação do E-mail"
                placeHolder="Confirme seu e-mail"
                type="text"
                autoComplete="email"
                value={emailRepeat}
                setValue={setEmailRepeat}
              ></LabelInput>
              <LabelInput
                name="Senha"
                placeHolder="Digite sua senha"
                type="password"
                autoComplete="current-password"
                value={password}
                setValue={setPassword}
              ></LabelInput>
              <LabelInput
                name="Confirmação de Senha"
                placeHolder="Confirme sua senha"
                type="password"
                autoComplete="current-password"
                value={passwordRepeat}
                setValue={setpasswordRepeat}
              ></LabelInput>
            </div>
            <div className="w-1/3">
              <Botao
                name="Cadastrar"
                nameIsLoading="Cadastrar"
                isLoading={loading}
                type="submit"
              />
            </div>
          </form>
          <div className="text-right">
            <Link className="text-blue-700 underline" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
