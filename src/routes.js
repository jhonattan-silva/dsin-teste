import { BrowserRouter, Route, Routes } from "react-router-dom";

import Exercicio1 from "./pages/exercicio1/exercicio1";
import Inicio from "./pages/inicio/Inicio";
import Exercicio2 from "./pages/exercicio2/exercicio2";
import Exercicio3 from "./pages/exercicio3/exercicio3";
import Exercicio4 from "./pages/exercicio4/exercicio4";
import Exercicio5 from "./pages/exercicio5/exercicio5";
import Exercicio6 from "./pages/exercicio6/exercicio6";
import Exercicio7 from "./pages/exercicio7/exercicio7";
import Exercicio8 from "./pages/exercicio8/exercicio8";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/exercicio1" element={<Exercicio1 />}></Route>
                <Route path="/exercicio2" element={<Exercicio2 />}></Route>
                <Route path="/exercicio3" element={<Exercicio3 />}></Route>
                <Route path="/exercicio4" element={<Exercicio4 />}></Route>
                <Route path="/exercicio5" element={<Exercicio5 />}></Route>
                <Route path="/exercicio6" element={<Exercicio6 />}></Route>
                <Route path="/exercicio7" element={<Exercicio7 />}></Route>
                <Route path="/exercicio8" element={<Exercicio8 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes