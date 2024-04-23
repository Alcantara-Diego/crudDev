import '../style/sidebar.scss'
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
                try {
                    let res = await fetch(`http://localhost:8000/api/buscar/tipo/aluno`).then(res => res.json()).then(data => {
                        alunos = data;

                        alunos.forEach(pessoa =>{
                            pessoa.notas = JSON.parse(pessoa.notas);
                        })

                        props.setResultadoApi(alunos);


                    })
                } catch (error) {
                    console.log(error)
                    
                }


                navigate("/lista");

            break;

            case "verCandidatos":

                let candidatos;

                try {
                    let res = await fetch(`http://localhost:8000/api/buscar/tipo/candidato`).then(res => res.json()).then(data => {
                        candidatos = data;

                        candidatos.forEach(pessoa =>{
                            pessoa.notas = JSON.parse(pessoa.notas);
                        });

                        props.setResultadoApi(candidatos);
                    
                    })
                } catch (error) {
                    console.log(error)
                    
                }
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