const express = require ('express')
const app = express ()
const PORT = 3000

//Configura o node para servir arquivos da pasta public

app.use(express.static('public'))
class SensorSimulado{
    constructor(tipo){
        this.tipo = tipo
    }

    lerDado(){
        return {
            tipo: this.tipo, 
            valor: Math.floor(Math.random()*100), // Gera numeros de 0 a 100
            timestamp: new Date(). toLocaleTimeString()
        }
    }
}

// Endpoint API que o Front - End vai consumir
const sensorHorta = new SensorSimulado("Umidade do sol")
app.get ('/api/sensor', (req, res) => {
    const dados = sensorHorta.lerDado()
    res.json(dados)
})

app.listen(PORT, () =>{
    console.log (`Servidor rodando em http://localhost:${PORT}`)
})