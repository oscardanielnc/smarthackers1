import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NotFound from './components/NotFound'
import Layout from "./components/Layout";
import Busqueda from "./components/Busqueda";
import Resultado from "./components/Resultado";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Busqueda />}/>
        <Route exact path="/resultado" element={<Resultado />}/>
        <Route element={<NotFound />}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
