class Ator{
    constructor(id,nome){
        this.nome = nome;
        this.id=id;
    }
}
class Diretor{
    constructor(id, nome){
        this.nome= nome;
        this.id =id;
    }
}

class Filme{
    constructor(id,titulo,ano,genero,duracao,cartaz,sinopse,direcao,elenco,classificacao,avaliacao){
        
        this.id=id;
        this.titulo=titulo;
        this.ano=ano;
        this.genero=genero;
        this.duracao=duracao;
        this.cartaz=cartaz;
        this.sinopse=sinopse;
        this.direcao=direcao;
        this.elenco=elenco;
        this.classificacao=classificacao;
        this.avaliacao=avaliacao;
        this.btnDetalhes=null;
    }

    getCard = async()=>{
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-top");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");
        let divGenero = document.createElement("div");
        divGenero.setAttribute("class", "notasinfo");
        divGenero.setAttribute("style","flex-grow:1;");
        let divAnoProducao = document.createElement("div");
        divAnoProducao.setAttribute("class", "notasinfo");
        divAnoProducao.setAttribute("style","flex-grow:1;");
        let divClassificacao = document.createElement("div");
        divClassificacao.setAttribute("class", "notasinfo");
        divClassificacao.setAttribute("style", "flex-grow:1;");
        hCardTitle.appendChild(document.createTextNode(this.titulo));
        divGenero.appendChild(document.createTextNode(this.genero));
        divAnoProducao.appendChild(document.createTextNode(this.ano));
        divClassificacao.appendChild(document.createTextNode(this.classficacao));
        divDetalhes.appendChild(divGenero);
        divDetalhes.appendChild(divAnoProducao);
        divDetalhes.appendChild(divClassificacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(hCardTitle);
        cardBody.appendChild(divDetalhes);

       this.setBtnDetalhes();
       cardBody.appendChild(this.getBtnDetalhes());

        return card;
    }
    
    setBtnDetalhes= () => {
        this.btnDetalhes = document.createElement('button');
        this.btnDetalhes.appendChild(document.createTextNode("Detalhes"));
        this.btnDetalhes.setAttribute("id",this.id);
        this.btnDetalhes.setAttribute("class", "btnDetalhesFilme");
    }

    getBtnDetalhes = () => {
        return this.btnDetalhes
    }

    getCardDetalhes = ()=>{
        let card = document.createElement("div");
        card.setAttribute("class","card2");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-top");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body2");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");


        let btnSalvar = document.createElement("button");
        btnSalvar.appendChild(document.createTextNode("Favoritar"));
        btnSalvar.setAttribute("id","btnsalvar");

        let btnFechar = document.createElement("button");
        btnFechar.appendChild(document.createTextNode("Fechar"));
        btnFechar.setAttribute("id", "btnfechar");

        let btnDesfavoritar = document.createElement("button");
        btnDesfavoritar.appendChild(document.createTextNode("Desfavoritar"));
        btnDesfavoritar.setAttribute("id","btndesfavoritar");

        let btnEditar = document.createElement("button");
        btnEditar.appendChild(document.createTextNode("Editar"));
        btnEditar.setAttribute("id","btneditar");


        let titulo = document.createElement("h2");
        titulo.setAttribute("class", "informacao");
        titulo.appendChild(document.createTextNode("Nome: "+this.titulo));
        let resumo = document.createElement("h4");
        resumo.setAttribute("class","informacao");
        resumo.appendChild(document.createTextNode("Resumo: "+this.sinopse));
        let genero = document.createElement("h4");
        genero.setAttribute("class","informacao");
        genero.appendChild(document.createTextNode("Gênero: "+this.genero));
        let duracao = document.createElement("h4");
        duracao.setAttribute("class","informacao");
        duracao.appendChild(document.createTextNode("Duração: "+this.duracao));
        let ano = document.createElement("h4");
        ano.setAttribute("class","informacao");
        ano.appendChild(document.createTextNode("Ano de lançamento: "+this.ano));
        let atores = document.createElement("h4");
        atores.setAttribute("class","informacao");
        atores.appendChild(document.createTextNode("Atores: "+this.elenco));
        let elenco = document.createElement("h4");
        elenco.setAttribute("class","informacao");
        elenco.appendChild(document.createTextNode("Diretores: "+this.direcao));
        let avaliacao = document.createElement("h4");
        avaliacao.setAttribute("class","informacao");
        avaliacao.appendChild(document.createTextNode("Avaliação: "+this.avaliacao));

        cardBody.appendChild(titulo);
        cardBody.appendChild(resumo);
        cardBody.appendChild(genero);
        cardBody.appendChild(duracao);
        cardBody.appendChild(ano);
        cardBody.appendChild(atores);
        cardBody.appendChild(elenco);
        cardBody.appendChild(avaliacao);
        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(btnSalvar);
        cardBody.appendChild(btnFechar);
        cardBody.appendChild(btnDesfavoritar);
        cardBody.appendChild(btnEditar);
        
        return card;
 }

    getCardEditar = () => {

        let card = document.createElement("div");
        card.setAttribute("class","card2");
        let imgCartaz = document.createElement("img");
        imgCartaz.setAttribute("class", "card-img-top");
        imgCartaz.setAttribute("src",this.cartaz);
        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body2");
        let hCardTitle = document.createElement("h5");
        hCardTitle.setAttribute("class","card-title");
        let divDetalhes = document.createElement("div");
        divDetalhes.setAttribute("style","display:flex; justify-content:space-aroud;");

        let titulo = document.createElement("h4");
        titulo.appendChild(document.createTextNode("Título"));
        titulo.setAttribute("class", "informacao");

        let inputTitulo = document.createElement("input");
        inputTitulo.setAttribute("class", "inputTit");

        let resumo = document.createElement("h4");
        resumo.appendChild(document.createTextNode("Sinopse"));
        resumo.setAttribute("class", "informacao");

        let inputSinopse = document.createElement("input");
        inputSinopse.setAttribute("class", "inputSinop");

        let SalvaAlter = document.createElement("button");
        SalvaAlter.appendChild(document.createTextNode("Salvar"));
        SalvaAlter.setAttribute("id","btnSalvarAlter");

        let FecharAlter = document.createElement("button");
        FecharAlter.appendChild(document.createTextNode("Fechar"));
        FecharAlter.setAttribute("id", "btnFecharAlter");

        card.appendChild(imgCartaz);
        card.appendChild(cardBody);
        cardBody.appendChild(titulo);
        cardBody.appendChild(inputTitulo);
        cardBody.appendChild(resumo);
        cardBody.appendChild(inputSinopse);
        cardBody.appendChild(SalvaAlter);
        cardBody.appendChild(FecharAlter);
        
        return card;
 }

}