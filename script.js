


let btnMenu = document.getElementById('abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('ativar-menu')
})


menu.addEventListener('click', ()=>{
    menu.classList.remove('ativar-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('ativar-menu')
})








var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000);

function proximaImg(){
    cont++

    if(cont > 2){
        cont = 1
    }

    document.getElementById('radio' + cont).checked = true

}



const noticiaContainer = document.querySelector('.ctd-noticias');
const noticiaControleContainer = document.querySelector('.noticia-controle');
const noticiaControle = ['previous', 'next'];
const noticiaItems = document.querySelectorAll('.noticia-item');

class Carrossel {
    constructor(container, items, controle) {
        this.carrosselContainer = container;
        this.carrosselControle = controle;
        this.carrosselArray = [...items];
    }

    updateNoticia() {
        // Remove as classes de item de notícia
        this.carrosselArray.forEach(el => {
            el.classList.remove('noticia-item-1', 'noticia-item-2', 'noticia-item-3', 'noticia-item-4', 'noticia-item-5');
        });

        // Adiciona as classes de item de notícia com base na posição
        this.carrosselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`noticia-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        // Verifica a direção do controle e atualiza o array de notícias
        if (direction.classList.contains('noticia-controle-previous')) {
            this.carrosselArray.unshift(this.carrosselArray.pop()); // Mover a última notícia para o início
        } else {
            this.carrosselArray.push(this.carrosselArray.shift()); // Mover a primeira notícia para o final
        }
        this.updateNoticia(); // Atualiza a exibição das notícias
    }

    setControls() {
        // Cria os botões de controle
        this.carrosselControle.forEach(controle => {
            const button = document.createElement('button');
            button.className = `noticia-controle-${controle}`;
            button.innerText = controle === 'anterior' ? 'Anterior' : '';
            noticiaControleContainer.appendChild(button);
        });
    }

    useControls() {
        // Adiciona eventos de clique aos botões de controle
        const triggers = [...noticiaControleContainer.childNodes];
        triggers.forEach(controle => {
            controle.addEventListener('click', e => {
                e.preventDefault(); // Previne o comportamento padrão do botão
                this.setCurrentState(controle); // Atualiza o estado atual
            });
        });
    }
}

// Criação da instância da classe Carrossel
const exampleCarrousel = new Carrossel(noticiaContainer, noticiaItems, noticiaControle);
exampleCarrousel.setControls(); // Configura os controles
exampleCarrousel.useControls(); // Ativa os controles












// ROLAGEM HEADER
window.addEventListener("scroll", function() {
    let header = document.querySelector('.header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});












// DOAÇÃO

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});

function toggleInfo(infoId) {
    const info = document.getElementById(infoId);
    info.classList.toggle('active');
}

// Garante que o botão de doação apareça como botão estilizado
document.addEventListener("DOMContentLoaded", function () {
    const donationButton = document.getElementById('donation-button');
    donationButton.style.display = 'inline-block'; // Garante que o botão apareça
});
