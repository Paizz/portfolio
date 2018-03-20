

class Retangulo{
    constructor(largura = 1, altura = 1) {
        this.largura = largura
        this. altura = altura
        this._cor = "Branco"
    }
    //Propriedade largura (get e set)
    get largura(){
        return this._largura
    }
    set largura(value){
        this._largura = value
    }

    //Propriedade altura (get e set)
    get altura(){
            return this._altura
        }
    set altura(value){
            this._altura = value
        }

    //Propriedade cor (get)
    get cor(){
        return this._cor
    }

    getArea(){
        return this.altura * this.largura
    }

    getPerimetro(){
        return 2*this._altura + 2*this._largura
    }
}

//Exercicio 1
let meuRetangulo = new Retangulo(4,5)
console.log(meuRetangulo.largura)
console.log(meuRetangulo.altura)
console.log(meuRetangulo.getArea())
console.log(meuRetangulo.getPerimetro())
/*
Exercicio 2
Exercicio 3
Exercicio 4
*/
//Exercicio 5
class Pais{
    constructor(nome, populacao, area){
        this.nome
        this.populacao
        this.area
    }

    static getMaiorPopulacaoPais(){
        let maior = Paises[0].populacao
        let nomePais = Paises[0].nome
        for(let i=0; i<Paises.length; i++){
            if(Paises[i].populacao > maior){
            maior = Paises[i].populacao
            nomePais = Paises[i].nome
            }
        }
        return nomePais
    }
}
 
let meuPais = new Pais("Portugal",10000000, 2323232232333223)
let meuPais2 = new Pais("Portugal",10000000, 2323232232333223)
let meuPais3 = new Pais("Portugal",10000000, 2323232232333223)
let meuPais4 = new Pais("Portugal",10000000, 2323232232333223)
let meuPais5 = new Pais("Portugal",10000000, 2323232232333223)
let Paises = []
Paises.push(meuPais)
Paises.push(meuPais2)
Paises.push(meuPais3)
Paises.push(meuPais4)
Paises.push(meuPais5)

console.log(Paises.length)
let nome = Pais.getMaiorPopulacaoPais()
console.log(nome)