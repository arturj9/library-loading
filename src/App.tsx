import { Routes, Route} from 'react-router-dom';
import { TelaInicial } from './telas/tela-inicial';

export function App() {
  
  return (
    <Routes>
        <Route path='/' Component={TelaInicial}/>
    </Routes>
  )
}

