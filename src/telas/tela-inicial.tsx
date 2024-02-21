import { Cabecalho } from "../components/cabecalho";
import {ListagemLivros} from "../components/listagem-livros"

export function TelaInicial() {
    return (
        <div>
            <Cabecalho />
            <ListagemLivros />
        </div>
    )
}

