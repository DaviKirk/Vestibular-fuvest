//alert("Este site não é oficial. Caso preencha as informações, elas não serão guardadas ou informadas a ninguém. É apenas um site ilustrativo para um trabalho escolar.")

//const form = document.getElementById('cadastroVestibular');

let idCelula = 0;
let num = 0;
function cadastrar(){

let table = document.getElementById('table');

const nome = document.getElementById('nome');
const nomeSocial = document.getElementById('nomeSocial');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');    


for (let linha = 0; linha < 1; linha++) {
    const linha = document.createElement('tr');
    for (let coluna = 0; coluna < 6; coluna++){
            const celula = document.createElement('td');
            celula.setAttribute("id", `celula-${idCelula++}`);
            linha.appendChild(celula);
    }
    table.appendChild(linha);
}

document.getElementById(`celula-${num++}`).innerHTML = nome.value
document.getElementById(`celula-${num++}`).innerHTML = nomeSocial.value
document.getElementById(`celula-${num++}`).innerHTML = cpf.value
document.getElementById(`celula-${num++}`).innerHTML = endereco.value
document.getElementById(`celula-${num++}`).innerHTML = telefone.value
document.getElementById(`celula-${num++}`).innerHTML = email.value
}


/* let idCelula = 0;
let num = 0;

function cadastrar(){

const nome = document.getElementById('nome');
const nomeSocial = document.getElementById('nomeSocial');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const telefone = document.getElementById('telefone');
const email = document.getElementById('email');

let table = document.getElementById('table');

for (let linha = 0; linha < 1; linha++) {
    const linha = document.createElement('tr');
    for (let coluna = 0; coluna < 6; coluna++){
            const celula = document.createElement('td');
            celula.setAttribute("id", `celula-${idCelula++}`);
            linha.appendChild(celula);
    }
    table.appendChild(linha);
}

for (let i = 0; i < 6; i++) {
    document.getElementById(`celula-${num++}`).innerHTML = nome.value
}




}
*/