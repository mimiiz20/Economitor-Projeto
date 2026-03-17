const express = require('express');
const app = express();
const PORT = 3000;

// Configura o Node para servir os arquivos da pasta 'public'
app.use(express.static('public'));

// OO no Back-end: Classe para simular o sensor
class SensorSimulado {
    constructor(tipo) {
        this.tipo = tipo;
    }

    lerDado() {
        return {
            tipo: this.tipo,
            valor: Math.floor(Math.random() * 100), // Gera 0-100%
            timestamp: new Date().toLocaleTimeString()
        };
    }
}

const sensorHorta = new SensorSimulado("Umidade do Solo");

// Endpoint API que o Front-end vai consumir
app.get('/api/sensor', (req, res) => {
    const dados = sensorHorta.lerDado();
    res.json(dados); // Envia o dado formatado como JSON
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});