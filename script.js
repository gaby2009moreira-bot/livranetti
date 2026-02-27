const botoes = document.querySelectorAll('.btn-curtir');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.parentElement;
        const mensagem = card.querySelector('.mensagem');
        
        if (botao.textContent.includes('Curtir')) {
            mensagem.textContent = "Adicionado aos favoritos!";
            botao.textContent = "Descurtir";
            botao.style.backgroundColor = "#4b0082";
        } else {
            mensagem.textContent = "";
            botao.textContent = "Curtir ❤️";
            botao.style.backgroundColor = "#8e44ad";
        }
    });
});