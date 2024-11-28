let resultArea = document.querySelector('h3');
let input = document.querySelector('input');
let button = document.querySelector('button');
let reset = document.querySelector('.reset')

let resposta = 0;

gerarNumero();

document.querySelector('body').addEventListener('keyup', (e)=>{
    if (e.key === 'Enter') {
        compararValores();
    }
});

function gerarNumero() {
    resposta = Math.floor(Math.random() * 101);
    console.log(resposta);
}

function compararValores() {
    if (input.value == '') {
        alert('Digite seu palpite!');
    } else if (input.value == resposta) {
        resultArea.classList.remove('blue');
        resultArea.classList.remove('red');

        resultArea.style.display = 'block';
        resultArea.classList.add('green');
        resultArea.innerHTML = 'Parabéns!! Você acertou.'
        input.value = '';

        reset.style.display = 'block';

    } else if (input.value > resposta) {
        resultArea.classList.remove('green');
        resultArea.classList.remove('red');

        resultArea.style.display = 'block';
        resultArea.classList.add('blue');
        resultArea.innerHTML = 'Chutou ALTO.'
        input.value = '';
    } else if (input.value < resposta) {
        resultArea.classList.remove('blue');
        resultArea.classList.remove('green');

        resultArea.style.display = 'block';
        resultArea.classList.add('red');
        resultArea.innerHTML = 'Chutou BAIXO.'
        input.value = '';
    }
}

function resetF() {
    reset.style.display = 'none';
    resultArea.style.display = 'none';
    gerarNumero();
}