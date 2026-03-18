// CLASSE BASE (SUPERCLASSE)

// Cria uma classe base para componentes da interface (UI)
class ComponenteUI {

    // Método executado quando criamos um objeto da classe
    constructor(idCard) {

        // Pega o elemento HTML do "card" pelo ID
        this.elementoCard = document.getElementById(idCard);

        // Pega o elemento onde o valor será exibido
        this.elementoValor = document.getElementById('valor-sensor');

        // Pega o elemento onde o nome do sensor será exibido
        this.elementoNome = document.getElementById('nome-sensor');
    }
}

// CLASSE FILHA (HERANÇA)

// Cria uma classe que herda de ComponenteUI
class MonitorUmidade extends ComponenteUI {
    
    // Método para atualizar os dados na tela
    atualizarDisplay(dados) {

        // Atualiza o nome do sensor (ex: "Umidade do Solo")
        this.elementoNome.innerText = dados.tipo;

        // Atualiza o valor do sensor (ex: 45)
        this.elementoValor.innerText = dados.valor;

        // LÓGICA DE NEGÓCIO

        // Se a umidade for menor que 30%
        if (dados.valor < 30) {

            // Muda o estilo do card para "critico"
            this.elementoCard.className = "card critico";

            // Atualiza a mensagem de status
            document.getElementById('mensagem-status').innerText = "Status: Solo Seco! Irrigar.";

        } else {

            // Caso contrário (umidade >= 30)
            this.elementoCard.className = "card normal";

            // Atualiza a mensagem de status
            document.getElementById('mensagem-status').innerText = "Status: Umidade Ideal.";
        }
    }
}


// CRIAÇÃO DO OBJETO

// Cria um objeto da classe MonitorUmidade
// e conecta com o elemento HTML de id "card-sensor"
const monitor = new MonitorUmidade('card-sensor');


// FUNÇÃO PARA BUSCAR DADOS

// Função assíncrona (usa await)
async function buscarDados() {

    try {

        // Faz uma requisição para a API do backend
        const response = await fetch('/api/sensor');

        // Converte a resposta para JSON
        const dadosJSON = await response.json();
        
        // Envia os dados para o objeto atualizar a tela
        monitor.atualizarDisplay(dadosJSON);

    } catch (erro) {

        // Se der erro (ex: servidor desligado)
        console.error("Erro ao buscar dados:", erro);
    }
}

// LOOP AUTOMÁTICO

// Executa a função buscarDados a cada 3 segundos (3000 ms)
setInterval(buscarDados, 3000);
