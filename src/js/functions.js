function mostrarLoading(mostrar){

    const loadScreen = document.getElementById("carregandoTela");

    console.log("momicr");

    mostrar ? loadScreen.style.display="flex" : loadScreen.style.display="none";
}

async function chamarApi(url){
    let resposta = false;

    try {
        mostrarLoading(true);
        let res = await fetch(url).then(res => res.json()).then(data => resposta = data)
    } catch (error) {
        console.log(error)
        
    } finally{
        mostrarLoading(false);
        return resposta
    }
}

export {mostrarLoading, chamarApi}