// Animação para alternar entre Login/Cadastro de forma dinâmica.
// Pegando os botões e inserindo em variáveis
var btnSignin = document.querySelector('#signin');
var btnSignup = document.querySelector('#signup');
// Tag body, onde será jogada a class.
var body = document.querySelector("body");

// Adiciona um evento de escutar quando o botão "entrar" é clicado, e adiciona ao body uma classe de nome "entrar-js".
btnSignin.addEventListener("click", function() {
    body.className = "entrar-js";
});
// Adiciona um evento de escutar quando o botão "cadastrar" é clicado, e adiciona ao body uma classe de nome "cadastrar-js".
btnSignup.addEventListener("click", function() {
    body.className = "cadastrar-js";
});


// Validações de formulário 
// const form = document.getElementById('#formulario-cadastro');
// const campos = document.querySelectorAll('.formulario-campo');

