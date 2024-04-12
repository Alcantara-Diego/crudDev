import '../style/buscarUsuario.scss'
import { useNavigate } from 'react-router-dom';
function BuscarUsuario(){

    const navigate = useNavigate();




    function hideEveryList(){

        const advancedSearchOptions = document.getElementsByClassName("advancedSearchOption");

        for( let i=0; i < advancedSearchOptions.length; i++){
            advancedSearchOptions[i].classList.remove(("showAdvancedSearchOption"));
        }
    }
    

    function searchParameters(){
        const optionsList = document.getElementById("searchOptions");

        // Get the selected value from the list of options.
        const selectedOption = document.getElementById(`${optionsList.value}Form`);

        // Hide every list before showing the selected one in order to avoid bugs.
        hideEveryList();


        //Show the selected list
        selectedOption.classList.add("showAdvancedSearchOption");

        
    }

    async function printInfo(){

        // let response = await fetch("http://localhost:3001/api");

        // let getContent = await response.json()
        event.preventDefault();
        
        // console.log(getContent);
        navigate("/lista");
    }

    


    return(

        <main id='buscarUsuarioSection'>
            <h2>Buscar usuários</h2>


            {/* pesquisar padrão */}
            <div className="searchOptionsDiv">
                <label htmlFor="searchOptions">Pesquisar por:</label>
                <select  name="searchOptions" id="searchOptions" onChange={searchParameters}>
                    <optgroup label="attribute">
                    <option value="vazio">Selecione</option>
                        
                        <option value="curso">Curso</option>
                        <option value="tipo">Aluno/Candidato</option>
                        <option value="email">E-mail</option>
                        <option value="nome">Nome</option>
                        <option value="telefone">Telefone</option>
                    </optgroup>
                </select>
            </div>


            {/* pesquisar por curso */}
            <form action="/search" method="GET" id="cursoForm" className="advancedSearchOption">
                <select  name="Curso" >
                    <optgroup label="Desenvolvedor" >
                        <option value="vazio">Selecione</option>
                        <option value="frontEnd">Front-end</option>
                        <option value="backEnd">Back-end</option>
                        <option value="fullStack">Full-stack</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar" onClick={printInfo}></input>
            </form>


            {/* pesquisar por aluno/candidato */}
            <form action="/search" method="GET" id="tipoForm" className="advancedSearchOption">
                <select name="tipo">
                    <optgroup label="Aluno/Candidato">
                        <option value="vazio">Selecione</option>
                        <option value="aluno">Aluno</option>
                        <option value="candidato">Candidato</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar" onClick={printInfo}></input>
            </form>

            {/* pesquisar por e-mail */}
            <form action="/search" method="GET" id="emailForm" className="advancedSearchOption">
                <input type="e-mail" name="email"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* pesquisar por nome */}
            <form action="/search" method="GET" id="nomeForm" className="advancedSearchOption">
                <input type="name" name="nome"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>

            {/* pesquisar por telefone */}
            <form action="/search" method="GET" id="telefoneForm" className="advancedSearchOption">
                <input type="tel" name="telefone"></input>
                <input type="submit" value="Pesquisar"></input>
            </form>



        </main>
    )
}

export default BuscarUsuario;