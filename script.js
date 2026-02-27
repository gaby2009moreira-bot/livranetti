const botoes = document.querySelectorAll('.btn-curtir');
const vitrine = document.getElementById('vitrine');
const carrinho = document.getElementById('carrinho');
const msgVazia = document.getElementById('carrinho-vazio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const card = botao.parentElement;
        const mensagem = card.querySelector('.mensagem');
        
        // Lógica: Adicionar ao Carrinho
        if (botao.textContent.includes('Adicionar')) {
            mensagem.textContent = "Adicionado!";
            botao.textContent = "Remover do Carrinho 🗑️";
            botao.classList.add('btn-remover');
            
            // Move o card para o carrinho
            carrinho.appendChild(card);
        } 
        // Lógica: Remover do Carrinho
        else {
            mensagem.textContent = "";
            botao.textContent = "Adicionar ao Carrinho 🛒";
            botao.classList.remove('btn-remover');
            
            // Devolve o card para a vitrine principal
            vitrine.appendChild(card);
        }

        // Verifica se mostra ou esconde a mensagem de carrinho vazio
        atualizarMensagemCarrinho();
    });
});

function atualizarMensagemCarrinho() {
    // Se o carrinho tiver mais elementos que apenas o <p> de mensagem vazia
    if (carrinho.children.length > 1) {
        msgVazia.style.display = 'none';
    } else {
        msgVazia.style.display = 'block';
    }
}