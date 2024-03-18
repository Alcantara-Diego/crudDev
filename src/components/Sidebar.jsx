import '../style/sidebar.scss'
import { useNavigate } from "react-router-dom"

function Sidebar(){

    const navigate = useNavigate();

    function alterarTela(tela){

        switch (tela) {
            case "novoUsuario":
                navigate("/novoUsuario")
                             
                break;

            case "buscarUsuario":
                navigate("/")
               
                break;
            
        
            default:
                break;
        }




    }

    return (
            <ul>
                <li className="sidebarHeader">
                
                    <div className="sidebarHeaderContent">
                        <div className="userInfo">
                            <p>Bem-vindo</p>
                            <h4>Usuario123</h4>
                        </div>
                    </div>
                </li>

                <li className="sidebarGroup">
                    <div className="sidebarGroupHeader" onClick={()=>{alterarTela("buscarUsuario")}}>
                        Pesquisar usuário
                    </div>
                </li>
                <li className="sidebarGroup" onClick={()=>{alterarTela("novoUsuario")}}>
                    <div className="sidebarGroupHeader">
                         Novo usuário
                    </div>
                </li>
                <li className="sidebarGroup">
                    <form action="/search" method="GET" id="getAllStudentsForm">
                        <select name="usuario" className="hide">
                            <option value="aluno">Aluno</option>
                        </select>
                        <div className="sidebarGroupHeader">
                          Ver alunos
                        </div>
                    </form>
                </li>
                <li className="sidebarGroup">
                    <form action="/search" method="GET" id="getAllCandidatesForm">
                        <select name="usuario" className="hide">
                            <option value="candidato">Candidato</option>
                        </select>
                        <div className="sidebarGroupHeader">
                             Ver candidatos
                        </div>
                    </form>
                </li>
            </ul>

    )
}

export default Sidebar