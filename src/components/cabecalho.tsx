import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

export function Cabecalho() {
  const { logout } = useContext(AuthContext)
  function handleLogout() {
    try {
      logout();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="h-16 p-2 text-slate-600 bg-white flex justify-between shadow-md">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="text-base w-24 flex justify-between items-center">
        <button className="p-1 text-slate-100 bg-[#23C55E] rounded-2xl">
          ADMIN
        </button>
        <button className="text-blue-500" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
}
