const codeReader = new ZXing.BrowserBarcodeReader()

const video = document.getElementById('video')

const codigoTexto = document.getElementById('codigo')

const imagem = document.getElementById('imagem')



const imagens = {

    "beijos ilimitados": "/static/imagens/beijos ilimitados.png",
    "bjdemorado901": "/static/imagens/beijo demorado.png",
    "cafune": "/static/imagens/cafune.png",
    "cineminha": "/static/imagens/cineminha.png",
    "cozinhar": "/static/imagens/cozinhar.png",
    "date": "/static/imagens/date.png",
    "dormir": "/static/imagens/dormir.png",
    "filme": "/static/imagens/filme.png"


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