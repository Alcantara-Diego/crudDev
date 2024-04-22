import { useState } from 'react';
import { useEffect } from 'react';
import '../style/usuarioInfo.scss'

function UsuarioInfo(props){

    const [materias, setMaterias] = useState(false);

    useEffect(()=>{
        let usuario = props.usuarioCarregado

        console.log(usuario)

        if (usuario) {
            console.log("------")

            const notasArray = Object.entries(usuario.notas).map(([materia, info]) => {
                return [materia, info[0], info[1]];
              });


            setMaterias(notasArray);
        }


    }, [props.usuarioCarregado])

    useEffect(()=>{
        console.log(materias)
    }, [materias])




    function allowUserEdit(allow){

        let confirmCancelBtnDiv = document.getElementsByClassName("confirmCancelBtnDiv")[0];
        let editBtn = document.getElementById("editBtn");

        if(allow){
            showEditInput(true);

            confirmCancelBtnDiv.style.display="flex";
            editBtn.style.display="none";
        } else{
            showEditInput(false);

            confirmCancelBtnDiv.style.display="none";
            editBtn.style.display="block";
        }


    }
    

    function showEditInput(param){

        const editInputArray = document.getElementsByClassName("editInput");

        if (param === true){

            for (let i = 0; i < editInputArray.length; i++) {
                
                editInputArray[i].style.display="block";  
            }
        } else{

            for (let i = 0; i < editInputArray.length; i++) {
                
                editInputArray[i].style.display="none";
            }
        }
    }





    return (
        <section id="userAllInfoSection">

                <div className="contentRow">
                    <p className="userInfoData">ID - {props.usuarioCarregado.id}</p>
                    <p className="userInfoData">{props.usuarioCarregado.nome}</p>
                </div>

                {props.usuarioCarregado.tipo === "aluno" && (
                    <table className="boletim">
                    <tr>
                        <th>Matéria</th>
                        <th>Nota</th>
                        <th>Situação</th>
                    </tr>
                    
                   

                    {materias && materias.map((materia, index) => (
                        <tr key={index}>
                            <td className="materiaNome">{materia[0]}</td>
                            <td className='matériaNota'>{materia[1]}</td>
                            <td className='matériaNota'>{materia[2]}</td>
                        </tr>
                    ))}

                    {/* <tr>
                        <td className="materiaNome">Desenvolvimento web</td>
                        <td className='matériaNota'>10</td>
                    </tr>

                    <tr>
                        <td className="materiaNome">Banco de dados</td>
                        <td className='matériaNota'>7</td>
                    </tr> */}

                    {/* <tr>
                        <td className="materiaNome">Segurança da informação</td>
                        <td className='matériaNota'>7</td>
                    </tr>

                    <tr>
                        <td className="materiaNome">Internet das coisas</td>
                        <td className='matériaNota'>6</td>
                    </tr> */}

                    <tfoot>
                        <th>Situação</th>
                        <td>Aprovado</td>
                    </tfoot>

                </table>
                )}

                


            
                <h2>Dados</h2>
                <div className="usuarioDados">
                    <div className="usuarioDevInfo contentRow ">
                        {/* aluno/candidato */}
                        <div className="userInfoDiv">Tipo
                            <p className="userInfoData">{props.usuarioCarregado.tipo}</p>
                            <select  name="editType" id="editStack" className="editInput">
                                <optgroup label="Tipo" >
                                    <option value="vazio">Selecione</option>
                                    <option value="aluno">Aluno</option>
                                    <option value="candidato">Candidato</option>
                                </optgroup>
                            </select>
                        </div>
                        
                        {/* stack */}
                        <div className="userInfoDiv">Desenvolvedor
                        <p className="userInfoData">{props.usuarioCarregado.curso}</p>
                        <select  name="editStack" id="editStack" className="editInput" aria-disabled="true">
                            <optgroup label="Desenvolvedor" >
                                <option value="vazio">Selecione</option>
                                <option value="frontEnd">Front-end</option>
                                <option value="backEnd">Back-end</option>
                                <option value="fullStack">Full-stack</option>
                            </optgroup>
                        </select>
                        </div>
                    </div>
                    <div className="contentRow">
                       
                        {/* e-mail */}
                        <div className="userInfoDiv">E-mail
                        <p className="userInfoData">{props.usuarioCarregado.email}</p>
                        <input type="e-mail" className="editInput"></input>
                        </div>
                    
                        {/* telefone */}
                        <div className="userInfoDiv">Telefone
                        <p className="userInfoData">{props.usuarioCarregado.email}</p>
                        <input type="tel" className="editInput"></input>
                        </div>
                    
                    </div>
                    {/* botões de interação */}
                    <div className="contentRow">
                    
                        <button id="editBtn" className="userAllInfoBtn" onClick={()=>{allowUserEdit(true)}}>Editar dados<i className="fa fa-pen-to-square"></i></button>
                        {/* <button id="editBtn" className="userAllInfoBtn">Gerar boletim<i className="fa fa-pen-to-square"></i></button> */}
                    
                    </div>
                    <div className="contentRow confirmCancelBtnDiv">
                        {/* cancelar edit */}
                        <div className="userInfoDiv">
                            <button id="cancelBtn"className="userAllInfoBtn" onClick={()=>{allowUserEdit(false)}}>Cancelar <i className="fa fa-close"></i>
                            </button>
                        </div>
                        {/* salvar edit */}
                        <div className="userInfoDiv">
                            <button id="saveBtn"className="userAllInfoBtn">Salvar <i className="fa fa-check"></i>
                            </button>
                        </div>
                    </div>
                </div>



            </section>

    )
}


export default UsuarioInfo