import '../style/usuarioInfo.scss'

function UsuarioInfo(){


    


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
                    <p className="userInfoData">ID-</p>
                    <p className="userInfoData">Nome</p>
                </div>

                
                <table className="boletim">
                    <tr>
                        <th>Matéria</th>
                        <th>Nota</th>
                    </tr>
                    
                    <tr>
                        <td className="materiaNome">Lógica de programação</td>
                        <td className='matériaNota'>8</td>
                    </tr>

                    <tr>
                        <td className="materiaNome">Desenvolvimento web</td>
                        <td className='matériaNota'>10</td>
                    </tr>

                    <tr>
                        <td className="materiaNome">Banco de dados</td>
                        <td className='matériaNota'>7</td>
                    </tr>

                    <tr>
                        <td className="materiaNome">Segurança da informação</td>
                        <td className='matériaNota'>7</td>
                    </tr>

                    <tr>
                        <td className="materiaNome">Internet das coisas</td>
                        <td className='matériaNota'>6</td>
                    </tr>

                    <tfoot>
                        <th>Situação</th>
                        <td>Aprovado</td>
                    </tfoot>

                </table>


            
                <h2>Dados</h2>
                <div className="usuarioDados">
                    <div className="usuarioDevInfo contentRow ">
                        {/* aluno/candidato */}
                        <div className="userInfoDiv">Tipo
                            <p className="userInfoData">Candidato</p>
                            <select  name="editType" id="editStack" className="editInput">
                                <optgroup label="Tipo" >
                                    <option value="vazio">Selecione</option>
                                    <option value="aluno">Aluno</option>
                                    <option value="candidato">Candidato</option>
                                </optgroup>
                            </select>
                        </div>
                        {/* linguagem */}
                        <div className="userInfoDiv">Linguagem
                        <p className="userInfoData">Javascript</p>
                        <select  name="editLanguage" id="editlanguage" className="editInput">
                            <optgroup label="linguagem">
                                <option value="vazio">Selecione</option>
                                <option value="Javascript">Javascript</option>
                                <option value="PHP">PHP</option>
                                <option value="Java">Java</option>
                                <option value="Phyton">Phyton</option>
                                <option value="C#">C#</option>
                            </optgroup>
                        </select>
                        </div>
                        {/* stack */}
                        <div className="userInfoDiv">Desenvolvedor
                        <p className="userInfoData">fullStack</p>
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
                        {/* cadastro */}
                        <div className="userInfoDiv">Cadastro
                            <p className="userInfoData">11/04/2024</p>
                        </div>
                        {/* e-mail */}
                        <div className="userInfoDiv">E-mail
                        <p className="userInfoData">Email@email.com.br</p>
                        <input type="e-mail" className="editInput"></input>
                        </div>
                    
                        {/* telefone */}
                        <div className="userInfoDiv">Telefone
                        <p className="userInfoData">11 99999-9999</p>
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