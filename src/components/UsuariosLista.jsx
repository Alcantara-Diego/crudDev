
function UsuariosLista(){


    function showAllInfo(obj){
        console.log(obj);
        const allUserData = document.getElementsByClassName("userInfoData");


        allUserData[0].innerHTML = obj.nome;
        allUserData[1].innerHTML = obj.id;
        allUserData[2].innerHTML = obj.tipodeusuario;
        allUserData[3].innerHTML = obj.linguagem;
        allUserData[4].innerHTML = obj.stack;
        allUserData[5].innerHTML = obj.email;
        allUserData[6].innerHTML = obj.telefone;




        toggleAllUserInfoVisibility();
    }

    function toggleAllUserInfoVisibility(){
        document.getElementById("userAllInfoSection").classList.toggle("show");

        allowUserEdit(false);

    }

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
        <div>

            <section id="userAllInfoSection">

                {/* CLOSE VIEW USER BUTTON */}
                <button id="closeAllInfoSectionBtn" onClick={toggleAllUserInfoVisibility}><i className="fa fa-close"></i></button>

                <h1>Informações do usuário</h1>

                <div className="contentRow">
                    <div className="userInfoDiv">Nome
                        <p className="userInfoData">Nome</p>
                    </div>

                    <div className="userInfoDiv">ID
                        <p className="userInfoData">ID</p>
                    </div>
                </div>
                <div className="contentRow">

                    {/* USER TYPE */}
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

                    {/* LANGUAGE */}
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

                    {/* STACK */}
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
                    {/* E-MAIL */}
                    <div className="userInfoDiv">E-mail
                    <p className="userInfoData">Email@email.com.br</p>
                    <input type="e-mail" className="editInput"></input>
                    </div>
                    

                    {/* TELEPHONE */}
                    <div className="userInfoDiv">Telefone
                    <p className="userInfoData">11 99999-9999</p>
                    <input type="tel" className="editInput"></input>
                    </div>
                </div>

                <div className="contentRow">
                    {/* EDIT BUTTON */}
                    <div className="userInfoDiv">
                        <button id="editBtn" className="userAllInfoBtn" onClick={()=>{allowUserEdit(true)}}>Editar <i className="fa fa-pen-to-square"></i></button>
                    </div>
                    
                    
                </div>

                <div className="contentRow confirmCancelBtnDiv">
                    {/* CANCEL BUTTON */}
                    <div className="userInfoDiv">
                        <button id="cancelBtn"className="userAllInfoBtn" onClick={()=>{allowUserEdit(false)}}>Cancelar <i className="fa fa-close"></i>
                        </button>
                    </div>
                    {/* SAVE BUTTON */}
                    <div className="userInfoDiv">
                        <button id="saveBtn"className="userAllInfoBtn">Salvar <i className="fa fa-check"></i>
                        </button>
                    </div>
                </div>

            </section>
            
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Linguagem</th>
                    <th>Desenvolvedor</th>
                    <th>Tipo</th>
                    <th></th>
                </tr>
                <tr>
                
                    <td>Diego Alcântara</td>
                    <td>Javascript</td>
                    <td>Front-end</td>
                    <td>Aluno</td>
                    <td><button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Dev 2</td>
                    <td>PHP</td>
                    <td>Full-stack</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr>
                
                {/* <tr>
                    <td>Dev 3</td>
                    <td>Java</td>
                    <td>Back-end</td>
                    <td>Candidato</td>
                    <td>
                        <button className="userInfoBtn" onClick={toggleAllUserInfoVisibility}>
                        <i className="fa-solid fa-eye"></i>
                        </button>
                    </td>
                </tr> */}
                {dbRequest && dbRequest.map((obj) => {
                    return(
                        <tr>
                            <td>{obj.nome}</td>
                            <td>{obj.linguagem}</td>
                            <td>{obj.stack}</td>
                            <td>{obj.tipodeusuario}</td>
                            <td>
                                <button className="userInfoBtn" onClick={() => {showAllInfo(obj)}}>
                                <i className="fa-solid fa-eye"></i>
                                </button>
                            </td>
                        </tr>
                    )}
                )}
            </table>
            

        </div>

    )
}

export default UsuariosLista;