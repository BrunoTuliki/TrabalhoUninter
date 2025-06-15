const botao = document.getElementById('botao');
const areaMensagem = document.getElementById('mensagem');

botao.addEventListener('click', () => {
  areaMensagem.textContent = "Obrigado por ver meu site, espero que tenha gostado!";
});
