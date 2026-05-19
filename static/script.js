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

                const codigo = result.text

                codigoTexto.innerText = `Código: ${codigo}`

                if (imagens[codigo]) {

                    imagem.src = imagens[codigo]

                    imagem.style.display = 'block'
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