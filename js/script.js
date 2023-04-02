let inputBuscarFilme = document.querySelector("#pesquisa");
let btnBuscarFilme = document.querySelector("#btnBuscar");
let navFavoritos = document.querySelector("#favoritos");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        let filmes = new Array();
        fetch("https://www.omdbapi.com/?apikey=b62f1253&s="+inputBuscarFilme.value, {mode: "cors"})
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
    fetch("https://www.omdbapi.com/?apikey=b62f1253&i="+id)
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

    document.querySelector("#btnfechar").onclick = () => {
        document.querySelector("#lista-filme").style.display = "flex";
        document.querySelector("#mostrar-filme").innerHTML="";
        document.querySelector("#mostrar-filme").style.display="flex";
    }

    document.querySelector("#btnsalvar").onclick = () => {
        let filmeString = localStorage.getItem("FilmFavoritos");
        let filmes = [];

        if(filmeString){
            filmes = JSON.parse(filmeString);
        }

        if(filmes && filmes.some(filmeTest => filmeTest.id === filme.id)){
            alert("Filme já salvo");
            return;
        }

        filmes.push(filme);
        localStorage.setItem('FilmFavoritos',JSON.stringify(filmes));
    }

    document.querySelector("#btndesfavoritar").onclick = () => {
            let filmesFavoritados = JSON.parse(localStorage.getItem('FilmFavoritos'));   
            filmesFavoritados = filmesFavoritados.filter(pegaId => pegaId.id !== filme.id);
            localStorage.setItem('FilmFavoritos',JSON.stringify(filmesFavoritados));
            listarFavoritos();
        }

    document.querySelector("#btneditar").onclick = () => {
        document.querySelector("#mostrar-filme").innerHTML="";
        document.querySelector("#mostrar-filme").appendChild(filme.getCardEditar());
    }

    document.querySelector("#btnSalvarAlter").onclick = () => {
        let Titinput= document.querySelector("#inputTit");
        let Sinopinput = document.querySelector("#inputSinop");

        let EditFilme = {
            titulo:Titinput.value,
            sinopse:Sinopinput.value
        };

        localStorage.setItem("EditFilme", JSON.stringify(EditFilme));
        EditFilme = JSON.parse(localStorage.getItem("EditFilme"));

        listarFavoritos();
    };
    
    document.querySelector("#btnFecharAlter").onclick = () => {
        document.querySelector("#lista-filme").style.display = "flex";
        document.querySelector("#mostrar-filme").innerHTML="";
        document.querySelector("#mostrar-filme").style.display="flex";
    };
});

 }

 let listarFilmes = async (filmes) =>{
    let listaFilmes = await  document.querySelector("#lista-filme");
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

function listarFavoritos(){
    const FilmFavoritos = JSON.parse(localStorage.getItem('FilmFavoritos'));
    const filmes=[];

    FilmFavoritos.forEach((item)=>{
        let genero = null;
        if (item.genero && typeof item.genero === 'string') {
            genero = item.genero.split(',');
        }
        const filme = new Filme(
            item.id,
            item.titulo,
            item.ano,  
            genero,
            null,
            item.cartaz, 
            null,
            null,
            null,
            item.classificacao,
            null
        );

        filmes.push(filme);
    });
    listarFilmes(filmes);

}

navFavoritos.onclick = () => {
    listarFavoritos();
}





