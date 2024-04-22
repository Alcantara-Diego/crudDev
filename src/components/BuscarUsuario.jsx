import '../style/buscarUsuario.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function BuscarUsuario(props){

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


   
    async function buscarDados(tipo){
        event.preventDefault();


        let valor = document.getElementById(tipo).value;
        if (valor=="vazio") return;

        console.log(valor);


        let resposta;


        console.log(tipo, valor)

        try {
            let res = await fetch(`http://localhost:8000/api/buscar/${tipo}/${valor}`).then(res => res.json()).then(data => resposta = data)
        } catch (error) {
            console.log(error)
            
        }
        

        
        console.log(resposta);

        props.setResultadoApi(resposta);
        // console.log(res);
        // navigate("/lista");
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
                    </optgroup>
                </select>
            </div>


            {/* pesquisar por curso */}
            <form action="/search" method="GET" id="cursoForm" className="advancedSearchOption">
                <select  name="Curso" id="curso">
                    <optgroup label="Desenvolvedor" >
                        <option value="vazio">Selecione</option>
                        <option value="frontend">Front-end</option>
                        <option value="backend">Back-end</option>
                        <option value="fullstack">Full-stack</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar" onClick={()=>{buscarDados("curso")}}></input>
            </form>


            {/* pesquisar por aluno/candidato */}
            <form action="/search" method="GET" id="tipoForm" className="advancedSearchOption">
                <select name="tipo" id="tipo">
                    <optgroup label="Aluno/Candidato">
                        <option value="vazio">Selecione</option>
                        <option value="aluno">Aluno</option>
                        <option value="candidato">Candidato</option>
                    </optgroup>
                </select>
                <input type="submit" value="Pesquisar" onClick={()=>{buscarDados("tipo")}}></input>
            </form>

        </main>
    )
}

export default BuscarUsuario;