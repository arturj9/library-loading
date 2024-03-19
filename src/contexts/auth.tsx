import { ReactNode, createContext, useEffect, useState } from "react";
import { login, verifyToken } from "../services/chamadasAPI";

interface AuthContextData {
  loginContext: (token: string) => void;
  logout: () => void;
  signed: boolean;
  token: string | null;
  login(email: string, password: string): Promise<object | string>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const loginContext = (token: string) => {
    console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const checkToken = async () => {
      const result = await verifyToken(token);
      if (!result) {
        logout();
      }
    };
    if (token) checkToken();
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ signed: Boolean(token), token, login, logout, loginContext }}
    >
      {children}
    </AuthContext.Provider>
  );
};
