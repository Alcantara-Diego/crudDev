import './style/app.scss'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import BuscarUsuario from './components/BuscarUsuario'
import NovoUsuario from './components/NovoUsuario'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
 
function App() {

  return (
    <Router>
      <div>
        <Nav></Nav>
        <div className="container">
          <Sidebar></Sidebar>
      
            <div className='telaExibida'>
              <Routes>
                <Route path='/' element={<BuscarUsuario />} />
                <Route path='/novoUsuario' element={<NovoUsuario />} />

                <Route path='*' element={<BuscarUsuario />} />
              </Routes>
            </div>
        </div>
      </div>
    </Router>
  )
}

export default App
