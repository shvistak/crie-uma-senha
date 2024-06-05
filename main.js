document.querySelector('.parametro-senha-botao');
const numeroSenha = document.querySelector('.parametro-senha-texto');
let tamanhoSenha = 12;
senha.textContent = tamanhoSenha;
const botoes = document.querySelector('.parametro-senha-botao');
const forcaSenha = document.querySelector('.forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function diminuiTamanho(){
    if(tamanhoSenha > 1){
    //tamanhoSenha = tamanhoSenha - 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho(){
    if(tamanhoSenha < 20){
    //tamanhoSenha = tamanhoSenha + 1;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
// codigo omitido
const campoSenha = document.querySelector('#campo-senha');
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function geraSenha(){
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++){
    let numeroAleatorio = Math.random()*letrasMaiusculas.length;
    numeroAleatorio = Math.floor(numeroAleatorio);
    senha = senha + letrasMaiusculas[numeroAleatorio];
    }
}
campoSenha.value = senha;
const checkbox = document.querySelectorAll(‘.checkbox’);
console.log(checkbox);
















    classificaSenha(alfabeto.lenght);
    }
function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(alfabeto.length);
    forcaSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57){
        forcaSenha.classList.add('media');
    } else if (entropia < 35){
        forcaSenha.classList.add('fraca');
    }
}
valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);