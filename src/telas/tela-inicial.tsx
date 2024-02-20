import { Cabecalho } from "../components/cabecalho";
import { Filtro } from "../components/filtro";
import {Tabela} from "../components/tabela"

export function TelaInicial() {
    return (
        <div>
            <Cabecalho />
            <Filtro />
            <Tabela />
        </div>
    )
}

