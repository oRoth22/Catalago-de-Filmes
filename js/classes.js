class Ator
{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Diretor
{
    constructor(id, nome){
        this.nome = nome;
        this.id = id;
    }
}

class Filme{
    constructor(id, titulo, ano, genero, sinopse, duracao, classificacao, ranking, cartaz) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.sinopse = sinopse;
        this.duracao = duracao;
        this.classificacao = classificacao;
        this.ranking = ranking;
        this.cartaz = cartaz;
        this.id = id;
    }
}