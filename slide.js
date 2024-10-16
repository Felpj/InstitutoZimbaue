
var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000);

function proximaImg(){
    cont++

    if(cont > 3){
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




window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 0);
});
