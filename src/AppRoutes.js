
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu'
// Para trazer a pasta filmes
import Filmes from 'pages/Filmes';
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
            <Route path="/" element={<Home />}> </Route>
                // Para a pasta filmes ser mostrada na tela
                <Route path="/filmes" element={<Filmes />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}