import dbTeste from "./dbTeste";
import '../style/usuarioLista.scss'
import { useNavigate } from "react-router-dom";
function UsuariosLista(){

    const navigate = useNavigate();







    return (
        <div className="usuarioListaContainer">

           
            
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Linguagem</th>
                        <th>Desenvolvedor</th>
                        <th>Tipo</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    
                        <td>Diego Alcântara</td>
                        <td>Javascript</td>
                        <td>Front-end</td>
                        <td>Aluno</td>
                        <td><button className="userInfoBtn">
                            <i className="fa-solid fa-eye"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                
                
                
                {dbTeste.map((obj) => {
                    return(
                        <tbody key={obj.id}>
                            <tr >
                                <td>{obj.nome}</td>
                                <td>{obj.linguagem}</td>
                                <td>{obj.stack}</td>
                                <td>{obj.tipo}</td>
                                <td>
                                    <button className="userInfoBtn" onClick={() => {navigate("/usuario")}}>
                                    <i className="fa-solid fa-eye"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    )}
                )}
            </table>
            

        </div>

    )
}

export default UsuariosLista;