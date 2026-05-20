const codeReader = new ZXing.BrowserBarcodeReader()

const video = document.getElementById('video')

const codigoTexto = document.getElementById('codigo')

const imagem = document.getElementById('imagem')



const imagens = {

    "beijos123": "/static/imagens/beijos_ilimitados.png",
    "bjdemorado901": "/static/imagens/beijo demorado.png",
    "cafune678": "/static/imagens/cafune.png",
    "cineminha234": "/static/imagens/cineminha.png",
    "cozinhar345": "/static/imagens/cozinhar.png",
    "date789": "/static/imagens/date.png",
    "dormir012": "/static/imagens/dormirag.png",
    "filme456": "/static/imagens/filme.png"


}



navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: "environment"
    }
})
.then(() => {

    codeReader.decodeFromVideoDevice(
        null,
        'video',
        (result, err) => {

            if (result) {

                const codigo = result.text.trim().toLowerCase();

                codigoTexto.innerText = `Código: ${codigo}`

                if (imagens[codigo]) {

                    imagem.src = imagens[codigo]

                    imagem.style.display = 'block'

                    document.getElementById("botoes").style.display = "block"

    document.querySelector("video").style.display = "none"
                }
            }

            if (err && !(err instanceof ZXing.NotFoundException)) {

                console.error(err)
            }
        }
    )
})
.catch(err => {

    console.error(err)

    alert("Erro ao acessar câmera")
})
function aceitarCupom() {

    document.getElementById("botoes").style.display = "none"

    document.getElementById("mensagemFinal").style.display = "block"
}

function reiniciarScanner() {

    imagem.style.display = "none"

    document.getElementById("botoes").style.display = "none"

    document.getElementById("mensagemFinal").style.display = "none"

    document.querySelector("video").style.display = "block"
}