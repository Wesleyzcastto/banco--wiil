// Variáveis para controlar o saldo e separações de dinheiro
let saldo = 5000.00;
let saldoSeparado = 0.00;

// Função para exibir o saldo atual
function atualizarSaldo() {
    document.getElementById('saldo').innerText = `R$ ${saldo.toFixed(2)}`;
}

// Função para separar uma quantia de dinheiro
function separarDinheiro() {
    const valor = prompt("Quanto deseja separar?");
    const valorSeparar = parseFloat(valor);

    if (isNaN(valorSeparar) || valorSeparar <= 0 || valorSeparar > saldo) {
        alert("Valor inválido ou insuficiente.");
    } else {
        saldo -= valorSeparar;
        saldoSeparado += valorSeparar;
        alert(`Você separou R$ ${valorSeparar.toFixed(2)}. Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
    atualizarSaldo();
}

// Função para realizar uma transferência
function transferirDinheiro() {
    const valor = prompt("Quanto deseja transferir?");
    const valorTransferir = parseFloat(valor);

    if (isNaN(valorTransferir) || valorTransferir <= 0 || valorTransferir > saldo) {
        alert("Valor inválido ou insuficiente.");
    } else {
        saldo -= valorTransferir;
        alert(`Você transferiu R$ ${valorTransferir.toFixed(2)}. Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
    atualizarSaldo();
}

// Função para realizar um Pix
function realizarPix() {
    const valor = prompt("Quanto deseja transferir via Pix?");
    const valorPix = parseFloat(valor);

    if (isNaN(valorPix) || valorPix <= 0 || valorPix > saldo) {
        alert("Valor inválido ou insuficiente.");
    } else {
        saldo -= valorPix;
        alert(`Você fez um Pix de R$ ${valorPix.toFixed(2)}. Saldo atual: R$ ${saldo.toFixed(2)}`);
    }
    atualizarSaldo();
}

// Atualizar o saldo na página ao carregar
window.onload = atualizarSaldo;
