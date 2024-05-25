import '../style/sidebar.scss'
import { chamarApi } from '../js/functions';
import { useNavigate } from "react-router-dom"

function Sidebar(props){

    const navigate = useNavigate();

    async function alterarTela(tela){

        switch (tela) {
            case "novoUsuario":
                navigate("/novoUsuario");
                             
                break;

            case "buscarUsuario":
                navigate("/");
               
                break;
            case "verAlunos":

                let alunos;
              
                alunos = await chamarApi(`http://localhost:8000/api/buscar/tipo/aluno`);

                alunos.forEach(pessoa =>{
                    pessoa.notas = JSON.parse(pessoa.notas);
                })

                props.setResultadoApi(alunos);

                navigate("/lista");

            break;

            case "verCandidatos":

                let candidatos = await chamarApi(`http://localhost:8000/api/buscar/tipo/candidato`);

                candidatos.forEach(pessoa =>{
                    pessoa.notas = JSON.parse(pessoa.notas);
                })

                props.setResultadoApi(candidatos);

                navigate("/lista");

                break;
        
            default:
                break;
        }




    }



    return (
            <ul className='sidebar'>
                <li className="sidebarHeader">
                
                    <div className="sidebarHeaderContent">
                        <div className="userInfo">
                            <p>Bem-vindo</p>
                            <h4>Administrador</h4>
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
                <li className="sidebarGroup" onClick={()=>{alterarTela("verAlunos")}}>
                    <form action="/search" method="GET" id="getAllStudentsForm">
                        <select name="usuario" className="hide">
                            <option value="aluno">Aluno</option>
                        </select>
                        <div className="sidebarGroupHeader">
                          Ver alunos
                        </div>
                    </form>
                </li>
                <li className="sidebarGroup" onClick={()=>{alterarTela("verCandidatos")}}>
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