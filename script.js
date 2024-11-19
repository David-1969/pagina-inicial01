let chatMessages = [
    "Oi! Como posso ajudar você hoje?",
    "Você já conheceu o trabalho do Mr. Loneliness?",
    "Se precisar de ajuda, estou por aqui!",
    "Você gostaria de saber mais sobre algum dos livros?",
    "Qual é o seu poema favorito?",
    "Já viu alguma das pinturas? "
];

let messageCount = 0;

function sendMessage() {
    const input = document.getElementById("message-input");
    const message = input.value;
    if (message.trim()) {  // Verifica se a mensagem não é apenas espaço em branco
        addMessageToChat(`Você: ${message}`);
        input.value = "";  // Limpa o campo de entrada
        input.focus();  // Dá foco novamente ao campo de entrada

        // Envia uma resposta do bot após a mensagem do usuário
        if (messageCount < chatMessages.length) {
            addMessageToChat(`Voz misteriosa: ${chatMessages[messageCount]}`);
            messageCount++;
        }
    }
}

function addMessageToChat(message) {
    const chatBox = document.getElementById("chat-box");

    // Cria um novo elemento de parágrafo para a mensagem
    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    // Adiciona a nova mensagem ao chat
    chatBox.appendChild(messageElement);

    // Rola a caixa de chat para mostrar a mensagem mais recente
    chatBox.scrollTop = chatBox.scrollHeight;
}

function loadMoreMessages() {
    const chatBox = document.getElementById("chat-box");

    // Verifica se ainda há mais mensagens para carregar
    if (messageCount < chatMessages.length) {
        for (let i = 0; i < 3 && messageCount < chatMessages.length; i++) {
            addMessageToChat(`Voz misteriosa: ${chatMessages[messageCount]}`);
            messageCount++;
        }

        // Se todas as mensagens já foram carregadas, esconde o botão "Mais mensagens"
        if (messageCount >= chatMessages.length) {
            document.getElementById("load-more").style.display = 'none';
        }
    }
}
