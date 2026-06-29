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