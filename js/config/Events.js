import { Config } from './Config.js';

export const Events = {
    clicou: Config.boxCanvas.onmousedown = () => {
        Config.clicado = true;
    },
    soltou: Config.boxCanvas.onmouseup = () => {
        Config.clicado = false;
    },
    movendoCursor: Config.boxCanvas.onmousemove = (event) => { // movendo
        Config.pos.x = event.offsetX
        Config.pos.y = event.offsetY
        Config.movendo = true
    },
    saiuDoCanvas: Config.boxCanvas.onmouseout = (event) => { // saiu d canvas
        Config.movendo = false
        Config.clicado = false;
    },
    mudarDeCor: () => {
        var mudarCor = document.querySelector('#color')
        mudarCor.addEventListener('blur', function(){
            Config.color = mudarCor.value
        });  
    },
    MudarTamanhoDaLinha: () => {
        var tamanhoLinha = document.querySelector('#tamanhoL')
        tamanhoLinha.addEventListener('keyup' ,function(){
            Config.tamanho = tamanhoLinha.value
        })
        tamanhoLinha.addEventListener('click' ,function(){
            Config.tamanho = tamanhoLinha.value
        })
    },
    LimpaCanvas: (box) => {
        var recarr = document.querySelector('#recarregar')
        recarr.addEventListener('click', function(){
            box.clearRect(0, 0, Config.width, Config.height);
        });  
    },
    desenharLinha: (linha,boxe) => {
        boxe.beginPath()
        boxe.lineWidth = Config.tamanho
        boxe.strokeStyle = Config.color
        boxe.moveTo(linha.posAnterior.x,linha.posAnterior.y)
        boxe.lineTo(linha.pos.x, linha.pos.y)
        boxe.stroke()  
    }
}