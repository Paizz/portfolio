let show = function(value){
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value +"\n"
}

let grades = [
    {
    name: 'Rui',
    grade: 8
    },
    {
    name: 'Ana',
    grade: 12
    },
    {
    name: 'Carla',
    grade: 14
    }]
/*
Variáveis
*/
let student = {
    name: "David Silva",
    course: "POO",
    grade: 12,
    //mostrar a função para o programamdor
    toString: function(){
        return this.name + "#" + this.course + "#" + this.grade
    }
}
//FUNÇÃO para listar os nomes das propriedades do objeto
function funcA(){
    let str = ""
    for (let key in student) {
        str += key
    }
    show("A-> " + str)
    show(student)//devolve [object object]
}

//FUNÇÃO para listar os nomes das propriedades do objeto, remover propriedade e listar novamente
function funcB(){
    funcA()
    delete student.grade
    funcA()
}

//FUNÇÃO para retornar o tamanho de um objeto (nº de propriedades)
function funcC(){
  let cont = 0
  for(let key in student){
      cont++
  }
  show("->"+cont)
}
function funcD(){
    let name = prompt("Digite um nome?")
    let grade = parseInt(prompt("Digite um numero?"))

    //Adicionar
    let grade,{name :myName, grade: myGrade}

    //Adicionar objeto ao Array
    grade.push(grade)

    //Listar objetos
    for(let i=0; i<grades.length; i++){
        str += grades[i].name + "-" + grades[i.grade] + "\n"
    }
    //Imprimir na TextArea
    show("D-> "+ str)
  }

  function funcE(){
      //Listar objetos
      let total = 0
    for(let i=0; i<grades.length; i++){
        total += grades[i.grade]
    }

    //Imprimir a media das notas na textArea
    show("E->"+total/grade.length)
    }

    function funcF(){
        //Obter todos os nomos dos estudantes com nota igual ou superior a 10
        let str=""
    }

    let car = []

    class Car{
        constructor(marca, matricula, cor, deposito, tipoCombustivel){
            this.marca = marca
            this.matricula = matricula
            this.cor = cor
            this.deposito = deposito
            this.tipoCombustivel = tipoCombustivel
        }
       
        //Pedido para atualizar a cor por uma função
        atualizaCor(novaCor){
            this.cor = novaCor
        }

        obterCor(){
            return this.cor
        }
    }

    let myCar = new car("Nissan","91-GH-15","Cinza", 10,"gásoleo")
    let myCar2 = new car("Seat","45-AS-52", 50,"Preto","gasolina")

    car.push(myCar)
    car.push(myCar2)

    //mudar a cor do carro
    function funG(){
        //Listar os carros que há na garagem
        for(let i=0; i<grades.length; i++){
            console.log(car[i].marca + "-" + car[i].cor)
        }   

        let novaCor = prompt("Pinta o teu carro de uma cor nova?")
        myCar.atualizaCor(novaCor)

        //Listar os carros que há na garagem de novo
        for(let i=0; i<grades.length; i++){
            console.log(car[i].marca + "-" + car[i].cor)
        }
    }

    function funcH(cyl_altura, cyl_raio){
        this.cyl_altura = cyl_altura;
        this.cyl_raio = cyl_raio;
        let cyl = new Cylinder(7, 4)

    }
    Cylinder.prototype.Volume = function () {
        return this.cyl_height * Math.PI * this.cyl_raio * this.cyl_raio;
      };
      
      var cyl = new Cylinder(7, 4);
      // Volume of the cylinder with four decimal places.
      console.log('volume =', cyl.Volume().toFixed(4));