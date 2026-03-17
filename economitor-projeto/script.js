// Classe filha aplicando herança
class MonitoUnidade extends ComponenteUI {
    atualizarDisplay (dados) {
        this.elementoNome.innerText = dados.tipo
        this.elementoValor.innerText = dados.valor

        if (dados.valor < 30){
            this.elementoCard.className = "card-critico"
            document.getElementById ('mensagem-status').innerText = "Status: Solo Seco! Irrigar"
        } else {
            this.elementoCard,className = "card-normal"
            document.getElementById('mensagem-status').innerText = "Status: Umidade Ideal "
        }

    }

    
}

const Monitor = new MonitoUnidade("card-sensor")

async function buscarDados() {
    try {
        const response = await fecth ('./api/sensor')
        const dadosJSON = await response.json()

        Monitor.atualizarDisplay(dadosJSON)
    } catch (erro) {
        console.error ("Erro ao buscar dados: ", erro)
    }
}

setInterval(buscarDados, 3000)