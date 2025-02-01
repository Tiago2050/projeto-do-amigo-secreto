let amigos = []; // Array para armazenar os amigos

function adicionarAmigo() {
    // Pega o valor do campo de entrada
    let amigo = document.getElementById('amigo').value;

    // Valida se o campo está vazio ou contém apenas espaços
    if (amigo.trim() === '') {
        alert("Por favor, insira um nome de amigo!");
        return; // Interrompe a execução da função se o campo for inválido
    }

    // Adiciona o nome ao array de amigos
    amigos.push(amigo);

    // Limpa o campo de entrada após adicionar
    document.getElementById('amigo').value = '';

    // Atualiza a lista de amigos na página
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Seleciona o elemento <ul> onde a lista será exibida
    let listaHTML = document.getElementById('listaAmigos');

    // Limpa o conteúdo atual da lista
    listaHTML.innerHTML = ''; // Isso garante que a lista seja limpa antes de adicionar novos itens

    // Percorre o array de amigos usando um loop for
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li>
        let itemLista = document.createElement('li');

        // Define o conteúdo do <li> como o nome do amigo
        itemLista.textContent = amigos[i];

        // Adiciona o <li> à lista <ul>
        listaHTML.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // 1. Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear!");
        return; // Interrompe a execução da função se o array estiver vazio
    }

    // 2. Gerar um índice aleatório
    // Math.random() gera um número entre 0 (inclusive) e 1 (exclusive)
    // Multiplicamos pelo tamanho do array para obter um número entre 0 e amigos.length
    // Math.floor() arredonda para baixo, garantindo um índice válido
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // 3. Obter o nome sorteado
    // Usamos o índice aleatório para acessar o nome correspondente no array
    let amigoSorteado = amigos[indiceSorteado];

    // 4. Mostrar o resultado
    // Seleciona o elemento onde o resultado será exibido
    let resultadoHTML = document.getElementById('resultado');

    // Limpa o conteúdo anterior do resultado
    resultadoHTML.innerHTML = '';

    // Cria um novo elemento <li> para exibir o amigo sorteado
    let itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo secreto: ${amigoSorteado}`;

    // Adiciona o <li> ao elemento de resultado
    resultadoHTML.appendChild(itemResultado);
}