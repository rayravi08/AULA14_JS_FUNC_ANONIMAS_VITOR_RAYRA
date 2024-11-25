//sintaxe de função sem parâmetros
//function cadastrarAluno(){console.log('A casa caiu)}

//sintaxe de função com parâmetros
//function somar(a,b{ return somar(3,4)});
function somar(a, b) {
  let total = a + b;
  console.log(total);
}

somar(7.8, 9.17);

//sintaxe da função anônima - arrow function
//()=>{}
//(): por onde a função recebe os argumentos (parâmetros), como ocorre funções tradicionais
//=> responsáveis pelo nome arrow
//{}: bloco de código que representa o escopo da função
let subtrair = (valor1, valor2) => {
  let resultado = valor1 - valor2;
  console.log(resultado);
};

subtrair(10.9865, -6.0089);

let numeros = [1, 3, 5, 10];

numeros.map((item) => {
  console.log(item);
});
