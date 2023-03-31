let inputBuscarFilme = document.querySelector("#pesquisa");
let btnBuscarFilme = document.querySelector("#btnBuscar");
let navFavoritos = document.querySelector("#favoritos");

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


let detalheFilme = async (id)=>{
    fetch("http://www.omdbapi.com/?apikey=b62f1253&i="+id)
    .then((resp)=> resp.json())
    .then((resp)=> {
        console.log(resp)

        let filme = new Filme(
            resp.imdbID,
            resp.Title,
            resp.Year,
            resp.Genre.split(","),
            resp.Runtime,
            resp.Poster,
            resp.Plot,
            resp.Director,
            resp.Actors.split(","),
            resp.Awards,
            resp.imdbRating
        )
        
    let listaFilmes = document.querySelector("#lista-filme");
    let detalhes = document.querySelector("#mostrar-filme");
    detalhes.innerHTML = "";
    listaFilmes.innerHTML = "";
    detalhes.appendChild(filme.getCardDetalhes());

    document.querySelector("#btnFechar").onclick = () => {
        document.querySelector("#lista-filme").style.display = "flex";
        document.querySelector("#mostrar-filme").innerHTML="";
        document.querySelector("#mostrar-filme").style.display="flex";
    }

    document.querySelector("#btnSalvar").onclick = () => {
        let filmesString = localStorage.getItem("filmesFavoritos");
        let filmes = [];

        if (filmesString){
        filmes = JSON.parse(filmesString);
    }

    filmes.push(filme);

    localStorage.setItem("filmesFavoritos",JSON.stringify(filme));
    }

    });
   return false;
 }

 let listarFilmes = async (filmes) =>{
    let listaFilmes = document.querySelector("#lista-filme");
    let detalhes = document.querySelector("#mostrar-filme");
    detalhes.innerHTML = "";
    listaFilmes.innerHTML = "";
    if(filmes.length > 0) {
        filmes.forEach(async(filme) => {
            console.log(filme);
          listaFilmes.appendChild(await filme.getCard()); 
          filme.getBtnDetalhes().onclick=()=>{
            detalheFilme(filme.id);
          } 
        });
    }
} 

let listarFavoritos = () => {
    
    const filmesFav = localStorage.getItem('filmesFav');
    filmesFav = JSON.parse(filmesFav);
    let filmes = new Array();

    filmesFav.forEach((item) => {
      const filme = new Filme(
      item.id,
      item.titulo,
      item.ano,  
      item.genero,
      null,
      null,
      item.cartaz,
      null,
      null,
      item.classi,
      null
  );
      filmes.push(filme);
  });

  listarFilmes(filmesFavoritos);
}

navFavoritos.onclick = () => {
    listarFavoritos();
}

