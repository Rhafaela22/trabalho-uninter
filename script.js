// Seleciona os elementos do HTML que serão usados.
const botao = document.getElementById('meuBotao');
const elementoMensagem = document.getElementById('mensagem');

// Adiciona um evento de clique ao botão.
botao.addEventListener('click', function() {
  elementoMensagem.textContent = '" Não tenhamos pressa, mas não percamos tempo. "';

  setTimeout(function() {
    // Após 8 segundos, o texto da mensagem é limpo.
    elementoMensagem.textContent = '';
  }, 8000); 
});
