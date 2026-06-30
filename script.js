const btnEnviarNome = document.getElementById('btn-enviar-nome'); // Captura o botão de enviar o nome
const campoNome = document.getElementById('nomeUsuario'); // Captura o campo de texto onde o usuário digita o nome
const divMensagem = document.getElementById('mensagemBoasVindas'); // Captura a div que exibirá a mensagem de boas-vindas

btnEnviarNome.addEventListener('click', function() { // Escuta o clique no botão de enviar o nome
    const nome = campoNome.value.trim(); // Obtém o nome digitado removendo espaços extras
    
    if (nome !== "") { // Verifica se o campo não está vazio
        divMensagem.innerHTML = `Olá <strong>${nome}</strong>, seja bem vindo, vamos aprender coisas novas.`; // Exibe a mensagem personalizada
        divMensagem.style.color = ""; // Limpa qualquer estilo de erro anterior
    } else {
        divMensagem.innerHTML = "<span style='color: red;'>Por favor, digite um nome antes de enviar!</span>"; // Exibe mensagem de erro se estiver vazio
    }
});

const avanca = document.querySelectorAll('.btn-proximo'); // Seleciona todos os botões com a classe '.btn-proximo'

avanca.forEach(button => { // Cria uma estrutura de repetição para aplicar a função em cada botão
    button.addEventListener('click', function() { // Adiciona um "ouvinte" que espera o clique no botão
        const atual = document.querySelector('.ativo'); // Localiza qual bloco de texto está visível (ativo) agora
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo'); // Descobre o ID do próximo passo usando o número salvo no botão

        atual.classList.remove('ativo'); // Esconde o passo atual da tela tirando a classe 'ativo' dele
        document.getElementById(proximoPasso).classList.add('ativo'); // Mostra o próximo passo adicionando a classe 'ativo' no ID dele
    });
});

const botaoTema = document.getElementById('alternar-tema'); // Busca na tela o botão de mudar o tema pelo ID dele

botaoTema.addEventListener('click', function() { // Adiciona um "ouvinte" que espera o clique no botão de tema
    document.body.classList.toggle('dark-mode'); // Liga ou desliga a classe 'dark-mode' no corpo do site a cada clique
});