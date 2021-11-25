import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Favoritos from './pages/Favoritos'
import Configuracoes from './pages/Configuracoes'
import Candidaturas from './pages/Candidaturas'
import Cadastroempresa from './pages/Cadastroempresa'
import Cadastrocandidato from './pages/Cadastrocandidato'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/Home" element={<Homepage />}/>
        <Route exact path="/Login" element={<Login />}/>
        <Route exact path="/Favoritos" element={<Favoritos />}/>
        <Route exact path="/Configuracoes" element={<Configuracoes />}/>
        <Route exact path="/Candidaturas" element={<Candidaturas />}/>
        <Route exact path="/Cadastroempresa" element={<Cadastroempresa />}/>
        <Route exact path="/Cadastrocandidato" element={<Cadastrocandidato />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
