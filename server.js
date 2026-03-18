// Importa o framework Express (que roda em cima do Node.js)
const express = require('express');

// Cria uma aplicação (servidor) usando o Express
const app = express();

// Define a porta onde o servidor vai rodar (3000 é comum para testes)
const PORT = 3000;

// Configura o servidor para servir arquivos estáticos da pasta 'public'
// Ex: HTML, CSS, JS do front-end
app.use(express.static('public'));

// PROGRAMAÇÃO ORIENTADA A OBJETOS (POO)

// Cria uma classe chamada SensorSimulado
class SensorSimulado {

    // Método especial chamado quando criamos um novo objeto
    constructor(tipo) {
        // Guarda o tipo do sensor (ex: "Umidade do Solo")
        this.tipo = tipo;
    }

    // Método que simula a leitura de um sensor
    lerDado() {
        return {
            tipo: this.tipo, // Retorna o tipo do sensor

            // Gera um número aleatório entre 0 e 99 (simulando porcentagem)
            valor: Math.floor(Math.random() * 100),

            // Pega o horário atual formatado (ex: 21:35:10)
            timestamp: new Date().toLocaleTimeString()
        };
    }
}


// Cria um objeto (instância) da classe SensorSimulado
// Aqui estamos simulando um sensor de umidade do solo
const sensorHorta = new SensorSimulado("Umidade do Solo");

// API (COMUNICAÇÃO COM O FRONT-END)

// Cria uma rota GET (quando alguém acessar /api/sensor)
app.get('/api/sensor', (req, res) => {

    // Chama o método que simula a leitura do sensor
    const dados = sensorHorta.lerDado();

    // Envia os dados em formato JSON para quem fez a requisição
    res.json(dados);
});

// INICIA O SERVIDOR

// Faz o servidor "escutar" na porta definida (3000)
app.listen(PORT, () => {

    // Mostra uma mensagem no terminal quando o servidor iniciar
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
