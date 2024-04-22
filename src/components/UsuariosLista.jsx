import dbTeste from "./dbTeste";
import '../style/usuarioLista.scss'
import { useNavigate } from "react-router-dom";
function UsuariosLista(props){

    const navigate = useNavigate();





    function exibirUsuario(usuario){
        props.setUsuarioCarregado(usuario);
        navigate("/usuario");
    }


    return (
        <div className="usuarioListaContainer">

           
            
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Tipo</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                {/* <tbody>
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
                </tbody> */}
                
                
                
                {props.resultadoApi?.map((obj) => {
                    return(
                        <tbody key={obj.id}>
                            <tr >
                                <td>{obj.nome}</td>
                                <td>{obj.curso}</td>
                                <td>{obj.tipo}</td>
                                <td>{obj.status}</td>
                                <td>
                                    <button className="userInfoBtn" onClick={() => {exibirUsuario(obj)}}>
                                    O
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