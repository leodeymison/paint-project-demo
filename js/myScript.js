// CanvasCaptureMediaStreamTrack 
const start = {
    boxCanvas: document.querySelector('#myPics'),
    icone: document.querySelectorAll('.obj-blc'),
    iconReta: document.querySelector('#iconReta'),
    linhaQuadrado: document.querySelector('#linha-quadrado'),
}
const valores = {
    tamanho: 1,
    color: '#000',
    width: 900,
    height: 500,
}
const pincel = {
    clicado: false,
    movendo: false,
    pos: {x: 0, y: 0},
    posAnterios: null,
}
const eventos = {
    clicou: start.boxCanvas.onmousedown = () => {
        pincel.clicado = true;
    },
    soltou: start.boxCanvas.onmouseup = () => {
        pincel.clicado = false;
    },
    movendoCursor: start.boxCanvas.onmousemove = (event) => { // movendo
        pincel.pos.x = event.offsetX
        pincel.pos.y = event.offsetY
        pincel.movendo = true
    },
    saiuDoCanvas: start.boxCanvas.onmouseout = (event) => { // saiu d canvas
        pincel.movendo = false
        pincel.clicado = false;
    },
}

const funcoes = {
    mudarDeCor: mudarDeCor = () => {
        var mudarCor = document.querySelector('#color')
        mudarCor.addEventListener('blur', function(){
            valores.color = mudarCor.value
        });  
    },
    TamanhoDALInha: TamanhoDALInha = () => {
        var tamanhoLinha = document.querySelector('#tamanhoL')
        tamanhoLinha.addEventListener('keyup' ,function(){
            valores.tamanho = tamanhoLinha.value
        })
        tamanhoLinha.addEventListener('click' ,function(){
            valores.tamanho = tamanhoLinha.value
        })
    },
    LimpaCanvas: recarregar = (box) => {
        var recarr = document.querySelector('#recarregar')
        recarr.addEventListener('click', function(){
            box.clearRect(0, 0, valores.width, valores.height);
        });  
    },
    desenharLinha: desenharLinha = (linha,boxe) => {
        boxe.beginPath()
        boxe.lineWidth = valores.tamanho
        boxe.strokeStyle = valores.color
        boxe.moveTo(linha.posAnterior.x,linha.posAnterior.y)
        boxe.lineTo(linha.pos.x, linha.pos.y)
        boxe.stroke()  
    }
}

const formas = {
    moldesSimples: triangulo = (box, logica,quantidade) => {
        let cont = 0;
        let x1 = 0,x2 = 0,y1 = 0,y2 = 0
        let movendoClicado = false
        desenha = []
        start.boxCanvas.addEventListener('mousedown', function(event){
            console.log('movendo clicado', cont)
            box.lineWidth = valores.tamanho
            box.strokeStyle = valores.color;
            x1 = event.offsetX
            y1 = event.offsetY 
            movendoClicado = true
        })
        start.boxCanvas.addEventListener('mousemove', function(event){
            if(movendoClicado){
                x2 = event.offsetX
                y2 = event.offsetY
                
            }           
        })

        start.boxCanvas.addEventListener('mouseup', function(event){
            box.beginPath();
            box.lineWidth = valores.tamanho
            box.strokeStyle = valores.color;
            if(quantidade == 1){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
            }
            if(quantidade == 2){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
            }
            if(quantidade == 3){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
            }
            if(quantidade == 4){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
            }
            if(quantidade == 5){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
            }
            if(quantidade == 6){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
            }
            if(quantidade == 7){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
                logica.itemSete(box, x1,y1,x2,y2)
            }
            if(quantidade == 8){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
                logica.itemSete(box, x1,y1,x2,y2)
                logica.itemOito(box, x1,y1,x2,y2)
            }
            if(quantidade == 9){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
                logica.itemSete(box, x1,y1,x2,y2)
                logica.itemOito(box, x1,y1,x2,y2)
                logica.itemNove(box, x1,y1,x2,y2)
            }
            if(quantidade == 10){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
                logica.itemSete(box, x1,y1,x2,y2)
                logica.itemOito(box, x1,y1,x2,y2)
                logica.itemNove(box, x1,y1,x2,y2)
                logica.itemDez(box, x1,y1,x2,y2)
            }
            if(quantidade == 11){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
                logica.itemSete(box, x1,y1,x2,y2)
                logica.itemOito(box, x1,y1,x2,y2)
                logica.itemNove(box, x1,y1,x2,y2)
                logica.itemDez(box, x1,y1,x2,y2)
                logica.itemOnze(box, x1,y1,x2,y2)
            }
            if(quantidade == 18){
                logica.itemUm(box, x1,y1,x2,y2)
                logica.itemDois(box, x1,y1,x2,y2)
                logica.itemTres(box, x1,y1,x2,y2)
                logica.itemQuatro(box, x1,y1,x2,y2)
                logica.itemCinco(box, x1,y1,x2,y2)
                logica.itemSeis(box, x1,y1,x2,y2)
                logica.itemSete(box, x1,y1,x2,y2)
                logica.itemOito(box, x1,y1,x2,y2)
                logica.itemNove(box, x1,y1,x2,y2)
                logica.itemDez(box, x1,y1,x2,y2)
                logica.itemOnze(box, x1,y1,x2,y2)
                logica.itemDoze(box, x1,y1,x2,y2)
                logica.itemTreze(box, x1,y1,x2,y2)
                logica.itemQuatoze(box, x1,y1,x2,y2)
                logica.itemQuinze(box, x1,y1,x2,y2)
                logica.itemDezesseis(box, x1,y1,x2,y2)
                logica.itemDezessete(box, x1,y1,x2,y2)
                logica.itemDezoito(box, x1,y1,x2,y2)
            }
            box.closePath(); 
            box.stroke();
            movendoClicado = false
        })  
    },
    moldesPintados: triangulo = (box, logica) => {
        let cont = 0;
        let x1 = 0,x2 = 0,y1 = 0,y2 = 0
        let movendoClicado = false
        desenha = []
        start.boxCanvas.addEventListener('mousedown', function(event){
            console.log('movendo clicado', cont)
            box.lineWidth = valores.tamanho
            box.strokeStyle = valores.color;
            x1 = event.offsetX
            y1 = event.offsetY 
            movendoClicado = true
        })
        start.boxCanvas.addEventListener('mousemove', function(event){
            if(movendoClicado){
                x2 = event.offsetX
                y2 = event.offsetY
                
            }           
        })

        start.boxCanvas.addEventListener('mouseup', function(event){
            box.lineWidth = valores.tamanho
            box.fillStyle = valores.color;
            logica.itemUm(box, x1,y1,x2,y2)
            movendoClicado = false
        })  
    },
    Circulos: Circulo = (box, logica) => {
        let cont = 0;
        let x1 = 0,x2 = 0,y1 = 0,y2 = 0
        let movendoClicado = false
        desenha = []
        start.boxCanvas.addEventListener('mousedown', function(event){
            console.log('movendo clicado', cont)
            box.lineWidth = valores.tamanho
            box.strokeStyle = valores.color;
            x1 = event.offsetX
            y1 = event.offsetY 
            movendoClicado = true
        })
        start.boxCanvas.addEventListener('mousemove', function(event){
            if(movendoClicado){
                x2 = event.offsetX
                y2 = event.offsetY

            }           
        })

        start.boxCanvas.addEventListener('mouseup', function(event){
            box.beginPath();
            box.lineWidth = valores.tamanho
            box.fillStyle = valores.color;
            logica.itemUm(box, x1,y1,x2,y2)
            box.stroke();
            movendoClicado = false
        })  
    },
}

const permissoes = {
    linhaLivre: true,
    quadradoBloco: false,
    triangulo: false,
    trianguloRetangulo: false,
    quadradoLosango: false,
    poligono5: false,
    poligono6: false,
    linhareta: false,
    estrela4P: false,
    estrela5P: false,
    setaParaBaixo: false,
    raio: false,
    quadradoPintado: false,
    borracha: false,
    circulo: false,
    comentarioQuadriculado: false,
    comentarioCircular: false,
    coracao: false,
    comentarioPensamento: false,
}


// INICIAR CANVAS
document.addEventListener('DOMContentLoaded', function(){
    var box = start.boxCanvas.getContext('2d')
    start.boxCanvas.width = valores.width
    start.boxCanvas.height = valores.height
    eventos.clicou
    eventos.soltou
    eventos.movendoCursor
    eventos.saiuDoCanvas
    
    
    const LinhaLivre = () => {
        if (pincel.clicado && pincel.movendo && pincel.posAnterios){
            funcoes.desenharLinha({pos: pincel.pos, posAnterior: pincel.posAnterios},box)
            pincel.movendo = false
        }
        pincel.posAnterios = {x: pincel.pos.x, y: pincel.pos.y}
        setTimeout(LinhaLivre, 1)
    }

    



    const quadradoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)}, 
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, 
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x2, y2)}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo(x1, y2)}, 
    }

    const quadradoLosangoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2, y1)},     // right-botton
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)}, //left-botton
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)}, // left-top
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},    //right-top
    }

    const tringuloLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)}, // right
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, //left
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)}, // top
    }

    const tringuloRetanguloLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)}, // right
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, //left
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x1, y2)}, // top
    }

    const poligono5Logica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)},     // right-botton
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, //left-botton
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x2+((x2-x1)/4), (y1+y2)/2.2)}, // left-top
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)},    //top-center
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.lineTo(x1-((x2-x1)/4), (y1+y2)/2.2)}, //right-top
    }
    const poligono6Logica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2, y1)},           // botton-center
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1+((y2-y1)/4))},  // left-botton
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x2, y2+((y1-y2)/4))},  // left-top
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)},   // top-center
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.lineTo(x1, y2+((y1-y2)/4))},// right-top
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.lineTo(x1, y1+((y2-y1)/4))},  // right-botton
    }
    const linhareta = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1,y1)},      // inicio
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2,y2)},  // fim
    }
    const estrela4pontasLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2, y1)},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)+((x2+x1)/16)/2), (((y2+y1)/2))+((y2+y1)/12)/2)},  
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)+((x2+x1)/16)/2), ((y2+y1)/2)+((y2-y1)/12)/2)},  
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2), ((y2+y1)/2)+((y2-y1)/12)/2)},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},
        itemOito: itemOito = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2), ((y1+y2)/2)+((y1+y2)/12)/2)},  
    }
    const estrela5pontasLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo((x2+x1)/2, (((y2+y1)/2))+((y2+y1)/6)/2)},  
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)+((x2+x1)/16)/2), ((y1+y2)/2)+((y1+y2)/12)/2)},  
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/12), ((y2+y1)/2)+((y2-y1)/12)/2)},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.lineTo((x2+x1)/2, y2)},
        itemOito: itemOito = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2),  ((y2+y1)/2)+((y2-y1)/12)/2)},
        itemNove: itemNove = (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},
        itemDez: itemDez = (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2), ((y1+y2)/2)+((y1+y2)/12)/2)},  
    }
    const setaParaBaixoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo((x2+x1)/2, y1)},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)},  
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(x2-((x2-x1)/3), (y1+y2)/2)}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo(x2-((x2-x1)/3),y2)},  
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.lineTo(x1+((x2-x1)/3),y2)},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.lineTo(x1-((x1-x2)/3), (y1+y2)/2)},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},
    }
    const raiosLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1, y2)},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)-((x2-x1)/8),y2+((y1-y2)/3))},  
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)-((x2-x1)/4),y2+((y1-y2)/3))}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/8),y1-((y1-y2)/3))},  
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2),y1-((y1-y2)/3))},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.lineTo(((x1+x2)/2)+((x2-x1)/4), y1-((y1-y2)/3))},
        itemOito: itemOito = (box, x1,y1,x2,y2) => {box.lineTo((((x1+x2)/2)+((x2-x1)/4))+((x2-x1)/8), y1-((y1-y2)/3))},
        itemNove: itemNove = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/8),y2+((y1-y2)/3))},
        itemDez: itemDez = (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/4),y2+((y1-y2)/3))}, 
        itemOnze:  itemOnze = (box, x1,y1,x2,y2) => {box.lineTo((x2+x1)/2,y2)},
    }
    const quadradoPintado = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.fillRect(x1, y1, x2-x1, y2-y1)},           
    }

    const borrachaLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.clearRect(x2,y1,40,40)},           
    }

    const CirculoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {
            box.arc(x1, y1,x2-x1, y1-y2, Math.PI * 2, true);
        },           
    }

    const comentarioQuadriculadoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1,y1);},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/6),y1-((y1-y2)/5),x1+((x2-x1)/4),y1-((y1-y2)/5));}, 
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1-((y1-y2)/5), x2, y1-((y1-y2)/5))}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2,y2,x2,y2)},
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2,y2,x1-((x2-x1)/10),y2)},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1-((x2-x1)/10),y2,x1-((x2-x1)/10),y1-((y1-y2)/5));},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1-((x2-x1)/10),y1-((y1-y2)/5),x1+((x2-x1)/10),y1-((y1-y2)/5));},
    }
    const comentarioCircularLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo(x1,y1);},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/6),y1-((y1-y2)/5),x1+((x2-x1)/4),y1-((y1-y2)/5));}, 
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2-((x2-x1)/3), y1-((y1-y2)/5), x2-((x2-x1)/3), y1-((y1-y2)/5))}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2,y1-((y1-y2)/5),x2,(y1+y2)/2)},
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2,y2,x2-((x2-x1)/3),y2)},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/3),y2,x1+((x2-x1)/3),y2);},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1-((x2-x1)/8),y2,x1-((x2-x1)/8),(y2+y1)/2);},
        itemOito: itemOito = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1-((x2-x1)/8),y1-((y1-y2)/5),x1,y1-((y1-y2)/5));},
        itemNove: itemNove = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/10),y1-((y1-y2)/5),x1,y1);},
    }
    const coracaoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2,y1);},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(((x1+x2)/2)+(((x2-x1)/6)*1.4),y1-((y1-y2)/12),((x1+x2)/2)+(((x2-x1)/6)*2.4),y1-((y1-y2)/3));}, 
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2+(((x2-x1)/12)*0.1),y2+((y1-y2)/2),x2-((x2-x1)/18),y2+((y1-y2)/3))}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2-((x2-x1)/5),y2-((x1-x2)/18),(x1+x2)/2,y2+((y1-y2)/3))},
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/5),y2-((x1-x2)/18),x1+((x2-x1)/18),y2+((y1-y2)/3))},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(((x1+x2)/2)-(((x2-x1)/6)*3),y1-((y1-y2)/2),((x1+x2)/2)-(((x2-x1)/6)*2.4),y1-((y1-y2)/3));}, 
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.quadraticCurveTo((x1+x2)/2-(((x2-x1)/6)*1.4),y1-((y1-y2)/12),(x1+x2)/2,y1);},  
    }
    const comentarioPensamentoLogica1 = {
        itemUm: itemUm = (box, x1,y1,x2,y2) => {box.arc(x1, y1, (x2-x1)/35, 0, Math.PI * 2, true)},           
        itemDois: itemDois = (box, x1,y1,x2,y2) => {box.arc(x1+((x2-x1)/10), y1-((y1-y2)/10), (x2-x1)/20, 0, Math.PI * 2, true)},  
        itemTres: itemTres = (box, x1,y1,x2,y2) => {box.moveTo(x1+((x2-x1)/6), y1-(y1+y2)/6)}, 
        itemQuatro: itemQuatro = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/3), y1-((y1+y2)/10),x1+((x2-x1)/3), y1-(y1+y2)/10)},  
        itemCinco: itemCinco = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1, y1,x1+((x2-x1)/2), y1-(y1+y2)/10)},
        itemSeis: itemSeis = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1, y1,x1+(((x2-x1)/2)*1.5), y1-(y1+y2)/10)},  
        itemSete: itemSete = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1, y1,x1+(((x2-x1)/2)*1.8), y1-(y1+y2)/10)},
        itemOito: itemOito = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y1-(y1+y2)/6)},
        itemNove: itemNove = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2+((x2-x1)/10), y1-((y1+y2)/5),x2, y1-(y1+y2)/4)},
        itemDez: itemDez = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2+((x2-x1)/10), y1-((y1+y2)/5),x2, y2+((y1-y2)/5))}, 
        itemOnze:  itemOnze = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2+((x2-x1)/10), y1-((y1+y2)/5),x2-((x2-x1)/10), y2+((y1-y2)/10))},
        itemDoze:  itemDoze = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
        itemTreze:  itemTreze = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
        itemQuatoze:  itemQuatoze = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
        itemQuinze:  itemQuinze = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
        itemDezesseis:  itemDezesseis = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
        itemDezessete:  itemDezessete = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
        itemDezoito:  itemDezoito = (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2, y1,x2, y2)},
    }








    // mudança de opção 
    permissoes.linhaLivre == false
    for(let i = 0; i < start.icone.length;i++){
        start.icone[0].classList.add('ative')
        start.icone[i].addEventListener('click', function(){
            for(let ii = 0; ii < start.icone.length; ii++){
                start.icone[ii].classList.remove('ative')
            }
            start.icone[i].classList.add('ative')
        })
    }


    if (permissoes.linhaLivre == true){
        LinhaLivre()
    }
    if (permissoes.quadradoBloco == true){
        quantidade = 4
        formas.moldesSimples(box,quadradoLogica1,quantidade)
    }
    if (permissoes.triangulo == true){
        quantidade = 3
        formas.moldesSimples(box,tringuloLogica1,quantidade)
    }
    if (permissoes.trianguloRetangulo == true){
        quantidade = 3
        formas.moldesSimples(box,tringuloRetanguloLogica1,quantidade)
    }
    if (permissoes.quadradoLosango == true){
        quantidade = 4
        formas.moldesSimples(box,quadradoLosangoLogica1,quantidade)
    }
    if (permissoes.poligono5 == true){
        quantidade = 5
        formas.moldesSimples(box,poligono5Logica1,quantidade)
    }
    if (permissoes.poligono6 == true){
        quantidade = 6
        formas.moldesSimples(box,poligono6Logica1,quantidade)
    }
    if (permissoes.linhareta == true){
        quantidade = 1
        formas.moldesSimples(box,linhareta,quantidade)
    }
    if (permissoes.estrela4P == true){
        quantidade = 8
        formas.moldesSimples(box,estrela4pontasLogica1,quantidade)
    }
    if (permissoes.estrela5P == true){
        quantidade = 10
        formas.moldesSimples(box,estrela5pontasLogica1,quantidade)
    }
    if (permissoes.setaParaBaixo == true){
        quantidade = 7
        formas.moldesSimples(box,setaParaBaixoLogica1,quantidade)
    }
    if (permissoes.raio == true){
        quantidade = 11
        formas.moldesSimples(box,raiosLogica1,quantidade)
    }
    if (permissoes.quadradoPintado == true){
        formas.moldesPintados(box,quadradoPintado)
    }
    if (permissoes.borracha == true){
        formas.moldesPintados(box,borrachaLogica1)
    }
    if (permissoes.circulo == true){
        formas.Circulos(box,CirculoLogica1)
    }
    if (permissoes.comentarioQuadriculado == true){
        quantidade = 7
        formas.moldesSimples(box,comentarioQuadriculadoLogica1,quantidade)
    }
    if (permissoes.comentarioCircular == true){
        quantidade = 9
        formas.moldesSimples(box,comentarioCircularLogica1,quantidade)
    }
    if (permissoes.coracao == true){
        quantidade = 7
        formas.moldesSimples(box,coracaoLogica1,quantidade)
    }
    if (permissoes.comentarioPensamento == true){
        quantidade = 18
        formas.moldesSimples(box,comentarioPensamentoLogica1,quantidade)
    }


    
    
    

    funcoes.LimpaCanvas(box)
    funcoes.TamanhoDALInha()
    funcoes.mudarDeCor()
})

