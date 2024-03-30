alert("Este site não é oficial. Caso preencha as informações, elas não serão guardadas ou informadas a ninguém. É apenas um site ilustrativo para um trabalho escolar.")

//variaveis para indetificação dos valores das celulas na table

let idCelula = 0;
let num = 0;

//função de cadastro (serve para pegar as informações do formulario criar uma nova linha na table e preenchela com as informações coletadas)

function cadastrar() {

    //variavel para coletar o id da table, utilizado no for que insere uma linha nova a table

    let table = document.getElementById('table');

    //valores do formulario

    const nome = document.getElementById('nome');
    const nomeSocial = document.getElementById('nomeSocial');
    const cpf = document.getElementById('cpf');
    const endereco = document.getElementById('endereco');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');

    //for que cria a nova linha ta table e insere celulas com indentificaçã

    for (let linha = 0; linha < 1; linha++) {
        const linha = document.createElement('tr');
        for (let coluna = 0; coluna < 6; coluna++) {
            const celula = document.createElement('td');
            celula.setAttribute("id", `celula-${idCelula++}`);
            linha.appendChild(celula);
        }
        table.appendChild(linha);
    }

    //insere os valores nas celulas criadas

    document.getElementById(`celula-${num++}`).innerHTML = nome.value
    document.getElementById(`celula-${num++}`).innerHTML = nomeSocial.value
    document.getElementById(`celula-${num++}`).innerHTML = cpf.value
    document.getElementById(`celula-${num++}`).innerHTML = endereco.value
    document.getElementById(`celula-${num++}`).innerHTML = telefone.value
    document.getElementById(`celula-${num++}`).innerHTML = email.value


}