/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.*/

// ----------------------ex1------------------------------
// let num1 = prompt("Digite o primeiro numero: ");

// let num2 = prompt("Digite o segundo numero: ");

// num1 = Number(num1);
// num2 = Number(num2);

// alert(num1 + num2);
// ----------------------------------------------------

/*2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".*/

// ----------------------ex2------------------------------

// let num = prompt("Digite um numero: ");

// num = Number(num);

// if (num %2 == 0){
//     alert("O numero digitado é par");
// } else{
//     alert("O numero digitado é impar");
// }


// ----------------------------------------------------

/*3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.*/

// ----------------------ex3------------------------------


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// 

// let i = 1;
// ------------while-------------
// while (i <= 10){
//     console.log(i);
//     i++;
// }

// ----------------------------------------------------

/*4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.*/

// ----------------------ex4------------------------------


// let num = Number(prompt("Digite o número da tabuada desejada: "));

// let resultado = "Tabuada do " + num + ":\n"; 
// for (let i = 1; i <= 10; i++) {
//     let result = num * i;
//     resultado += num + " x " + i + " = " + result + "\n"; 
// }

// alert(resultado); 

// ----------------------------------------------------


/*5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.*/

// ----------------------ex5------------------------------

// let numArray = [3, 7, 2, 9, 5];

// let maior = 0;

// for (let i = 0; i < numArray.length; i++){
//     if (numArray[i] > maior){
//         maior = numArray[i];
//     }
// }
// console.log(maior);


// ----------------------------------------------------

/*6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.*/

// ----------------------ex6------------------------------

// let palavra = prompt("Digite uma palavra para ser invertida: ");

// let novaPalavra = palavra.split('').reverse('').join('');

// alert(novaPalavra);

// ----------------------------------------------------

/*7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.*/

// ----------------------ex7------------------------------

// let arrayNum = [1, 2, 3, 4, 5];

// let soma = 0 

// for (let i = 0; i < arrayNum.length; i++){
//     soma += arrayNum[i]; 
// }

// console.log("A soma dos numeros dentro do array é ", soma);

// ----------------------------------------------------

/*8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".*/

// ----------------------ex8------------------------------

// let numeroDigitado = Number(prompt("Informe um numero de sua escolha: "));

// let divisor = 2;

// while(numeroDigitado % divisor != 0){
//     divisor++; 
// }

// if (numeroDigitado == divisor){
//     alert("Numero primo");
// } else {
//     alert("Numero não é primo");
// }

// ----------------------------------------------------

/*9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.*/

// ----------------------ex9------------------------------

// function fatorial(n){
//     let resultado = n;
//     for (let i = 1; i < n; i++){
//         resultado *= i; 
//     }
//     return resultado;
// }

// const numero = Number(prompt("Digite um numero para calcular o fatorial: "));
// const resultado = fatorial(numero);

// console.log(resultado);


// ----------------------------------------------------

/*10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.*/

// ----------------------ex10------------------------------


// function verificarPalindromo(palavra) {
//     const palavraInvertida = palavra.split('').reverse().join('');
//     if (palavra === palavraInvertida) {
//         console.log("A palavra é um palíndromo");
//     } else {
//         console.log("A palavra não é um palíndromo");
//     }
// }

// const palavra = prompt("Digite uma palavra para verificar se é um palíndromo:");
// verificarPalindromo(palavra);


// -------------------------------------------------------


/*11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.*/

// ----------------------ex11------------------------------


// let frase = prompt("Digite uma frase:");
// let vogais = 'aeiouAEIOU';
// let contador = 0;

// for (let i = 0; i < frase.length; i++) {
//     if (vogais.includes(frase[i])) {
//         contador++;
//     }
// }

// console.log("O número de vogais na frase é:", contador);



// -------------------------------------------------------

/*12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.*/


// ----------------------ex12------------------------------

// let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// console.log("Número aleatório entre 1 e 100:", numeroAleatorio);

// -------------------------------------------------------



/*13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.*/

// ----------------------ex13------------------------------

// let array = [4, -3, 2, -1, 0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0) {
//         array[i] = 0;
//     }
// }

// console.log(array);

// -------------------------------------------------------



/*14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.*/

// ----------------------ex14------------------------------

// let palavrasProibidas = ['pilantra', 'boboca'];
// let fraseUsuario = prompt("Digite uma frase:");

// for (let i = 0; i < palavrasProibidas.length; i++) {
//     if (fraseUsuario.includes(palavrasProibidas[i])) {
//         alert("A frase contém palavras proibidas.");
//         break;
//     }
// }

// -------------------------------------------------------



/*15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/

// ----------------------ex15-------------------------------

// let numerosPares = [];

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         numerosPares.push(i);
//     }
// }

// console.log(numerosPares);

// -------------------------------------------------------

/*16 Crie uma função que receba um objeto do tipo OBJECT que represente um produto com as propriedades: nome, preço e quantidade.

Adicione uma nova propriedade categoria ao objeto usando o operador spread.
Utilize destructuring para extrair o nome e o preço do produto e exiba-os no console.
Crie uma função que receba um produto e retorne uma mensagem no formato:
"Produto: [nome] custa [preço] na categoria [categoria].*/

// ----------------------ex16-------------------------------

// function adicionarCategoria(produto, categoria) {
//     return { ...produto, categoria };
// }   

// function exibirProduto(produto) {
//     const { nome, preco, categoria } = produto;
//     console.log(`Produto: ${nome} custa ${preco} na categoria ${categoria}.`);
// }

// const produto = { nome: 'Notebook', preco: 2500, quantidade: 10 };
// const produtoComCategoria = adicionarCategoria(produto, 'Eletrônicos');
// exibirProduto(produtoComCategoria);

// -------------------------------------------------------

