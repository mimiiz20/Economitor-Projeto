// Classe Base
class ComponenteUI {
    constructor(idCard) {
        this.elementoCard = document.getElementById(idCard);
        this.elementoValor = document.getElementById('valor-sensor');
        this.elementoNome = document.getElementById('nome-sensor');
    }
}

// Classe Filha aplicando Herança
class MonitorUmidade extends ComponenteUI {
    
    atualizarDisplay(dados) {
        this.elementoNome.innerText = dados.tipo;
        this.elementoValor.innerText = dados.valor;

        // Lógica de Negócio (Requisito de Prova)
        if (dados.valor < 30) {
            this.elementoCard.className = "card critico";
            document.getElementById('mensagem-status').innerText = "Status: Solo Seco! Irrigar.";
        } else {
            this.elementoCard.className = "card normal";
            document.getElementById('mensagem-status').innerText = "Status: Umidade Ideal.";
        }
    }
}

// Instância da classe
const monitor = new MonitorUmidade('card-sensor');

// Função de comunicação (Fetch)
async function buscarDados() {
    try {
        const response = await fetch('/api/sensor');
        const dadosJSON = await response.json();
        
        // Passando os dados para o objeto da classe
        monitor.atualizarDisplay(dadosJSON);
    } catch (erro) {
        console.error("Erro ao buscar dados:", erro);
    }
}

// Loop de atualização (3 segundos)
setInterval(buscarDados, 3000);