'use restrict'; //Modo restrito

//Limpar formulário
const limparFormulário = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);