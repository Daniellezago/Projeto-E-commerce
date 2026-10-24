// Etapa 1: mensagem de frete dinâmica com if/else
const totalCarrinho = 250;
const aviso = document.querySelector("#aviso-frete");

if (totalCarrinho >= 250) {
    aviso.textContent = "Frete Grátis nas compras acima de R$ 250";
} else {
    aviso.textContent = "Frete: R$ 20,00 (Frete grátis a partir de R$ 250)";
}

// Etapa 2: menu que abre e fecha
const btn = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("aberto");
});

// Etapa 3: validação simples do formulário de contato
const form = document.querySelector("#contato-form");
const email = document.querySelector("#email");
const erro = document.querySelector("#erro");

form.addEventListener("submit", function (evento) {
    if (email.value === "") {
        evento.preventDefault();
        erro.textContent = "Digite seu e-mail.";
    }
});

// Funcionalidade do botão "Ver Detalhes"
const botoesDetalhes = document.querySelectorAll(".btn-detalhes");

botoesDetalhes.forEach(function (botao) {
    botao.addEventListener("click", function (evento) {
        // Encontra o cartão do produto correspondente ao botão clicado
        const cartao = evento.target.closest(".cartao");

        // Puxa o nome e o preço de dentro daquele cartão específico
        const nomeProduto = cartao.querySelector("p").innerText;
        const precoProduto = cartao.querySelectorAll("p")[1].innerText;

        // Exibe um alerta personalizado com os dados do produto
        alert("✨ Informações do Produto ✨\n\nProduto: " + nomeProduto + "\nPreço: " + precoProduto + "\n\nEm breve mais detalhes desta linha de cosméticos!");
    });
});
