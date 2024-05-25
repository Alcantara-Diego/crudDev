import '../style/buscarUsuario.scss'
import { useNavigate } from 'react-router-dom';
import { chamarApi } from '../js/functions';
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

        console.log(tipo, valor)

        

        let resposta = await chamarApi(`http://localhost:8000/api/buscar/${tipo}/${valor}`);
        

        
        console.log(resposta);

        resposta.forEach(pessoa =>{
            pessoa.notas = JSON.parse(pessoa.notas);
        })

        props.setResultadoApi(resposta);
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