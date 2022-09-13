//Use o array de filmes que esta no template
// Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
// Crie um laço for dentro do primeiro, para concatenar o elenco numa String
// A saída deve se parecer com:
// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso”
/*
laço pra cada filme {
  console.log('titulo, ano, diretor')
  console.log("estrelando: ")
  laço no elenco{
    cada pessoa no elen

*/

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
console.log("FOR IN")

for(let filme in filmes) {
  console.log(`${filmes[filme].titulo}, de ${filmes[filme].ano}, dirigido por ${filmes[filme].diretor}. Tem no elenco:`)

  for(let ator in filmes[filme].elenco){
    console.log(filmes[filme].elenco[ator])
  }

  console.log("=====================")
}

console.log("FOR OF")
for (let filme of filmes){
  console.log(`${filme.titulo} de ${filme.ano}, dirigido por ${filme.diretor}. Tem no elenco:`)

  for (let ator of filme.elenco) {
    console.log(ator)
  }
  console.log("=====================")
}

// Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. 
// Portanto, precisaremos de um array de arrays.
// Depois, devemos verificar se o número de itens do array que contém os jogos contém exatamente 4 resultados
// Caso seja diferente, imprima que é necessário alterar o número de itens do array.

/*
const resultadoMegaSena = [
[6, 10, 23 , 89, 12, 34], //0
[81, 12, 32, 65, 86, 4], //1
[10, 54, 8, 12, 58, 23], //2
[9, 3, 6, 10, 40, 50] //3
]*/
//console.log(resultadoMegaSena.length)
//resultadoMegaSena[0]
//resultadoMegaSena[1]
//resultadoMegaSena[2]
//resultadoMegaSena[3]

// inicial;    limite;     a cada iteração/incremento
/*
for (let i = 0; i<resultadoMegaSena.length; i++) {
  //console.log(resultadoMegaSena[i])
  if(resultadoMegaSena[i].length !== 6){
    alert(`Resultado do sorteio está errado!.`)
  } else {
  console.log(`Confira os resultados da mega! ${resultadoMegaSena[i]}`)
  }
}
*/

/*
for (let i = 0; i < resultadoMegaSena.length; i++) {
  console.log(`Sorteio ${i+1}:`)
  for (let indice = 0; indice < resultadoMegaSena[i].length; indice++) {
    const sorteio = resultadoMegaSena[i] // variavel para pegar cada sorteio
    //console.log(sorteio[indice])
    console.log(resultadoMegaSena[i][indice])
  }
}
*/

// Altere o laço externo do programa anterior para que ele seja um for… in
// for (let indice in array)
// para cada indice do array

// Altere o laço interno do programa anterior para que ele seja um for… of
// for(let elemento of array)
// para cada elemento do array

/*
for(let i in resultadoMegaSena){
  console.log(typeof i)
	console.log(`Sorteio ${Number(i)+1}:`);
  for(let numero of resultadoMegaSena[i]){
    console.log(numero);  
  }
}
*/

