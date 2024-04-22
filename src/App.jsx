import './style/app.scss'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import BuscarUsuario from './components/BuscarUsuario'
import UsuariosLista from './components/UsuariosLista'
import NovoUsuario from './components/NovoUsuario'
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UsuarioInfo from './components/UsuarioInfo'
import { useEffect, useState } from 'react'

 
function App() {

  const [resultadoApi, setResultadoApi] = useState([]);

  useEffect(()=>{
    console.log(resultadoApi)
  }, [resultadoApi]);

  return (
    <Router>
      <div>
        <Nav></Nav>
        <div className="container">
          <Sidebar></Sidebar>
      
            <div className='telaExibida'>
              <Routes>
                <Route path='/'  element={<BuscarUsuario setResultadoApi={setResultadoApi}/>} />
                <Route path='/novoUsuario' element={<NovoUsuario />} />

                <Route path='/lista' element={<UsuariosLista />} />

                <Route path='/usuario' element={<UsuarioInfo />} />

                <Route path='*' element={<BuscarUsuario />} />
              </Routes>
            
            </div>
        </div>
      </div>
    </Router>
  )
}

export default App
