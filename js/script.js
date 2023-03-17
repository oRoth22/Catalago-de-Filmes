let inputBuscarFilme = document.querySelector("#pesquisa");
let btnBuscarFilme = document.querySelector("#btnBuscar");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("http://www.omdbapi.com/?apikey=b62f1253&s="+inputBuscarFilme.value, {mode: "cors"})
        .then((resp)=> resp.json())
        .then((resp)=> {
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme);
            });
            listarFilmes(filmes);
        })
    }       
return false;
}

let listarFilmes = async (filmes) =>{
    let listaFilmes = await document.querySelector("#lista-filme");
    listaFilmes.innerHTML = "";
    //console.log(listaFilmes);
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log(filme);
          listaFilmes.appendChild(await filme.getCard()); 
          filme.getBtnDetalhes().onclick=()=>{
            detalhesFilme(filme.id);
          } 
        });
    }
} 

let detalhesFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=b62f1253&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
        console.log(resp)

        
        
    })
 }
