import { Config } from '../config/Config.js'


export function moldesSimples (logica){
    let x1 = 0,x2 = 0,y1 = 0,y2 = 0
    let movendoClicado = false
    Config.boxCanvas.addEventListener('mousedown', function(event){
        Config.box.lineWidth = Config.tamanho
        Config.box.strokeStyle = Config.color;
        x1 = event.offsetX
        y1 = event.offsetY 
        movendoClicado = true
    })
    Config.boxCanvas.addEventListener('mousemove', function(event){
        if(movendoClicado){
            x2 = event.offsetX
            y2 = event.offsetY
        }           
    })

    Config.boxCanvas.addEventListener('mouseup', function(event){
        Config.box.beginPath();
        Config.box.lineWidth = Config.tamanho
        Config.box.strokeStyle = Config.color;
        for(let i = 0; i < logica.length; i++){
            logica[i](Config.box, x1,y1,x2,y2)
        }
        Config.box.closePath(); 
        Config.box.stroke();
        movendoClicado = false
    })  
};

export function moldesPintados(logica) {
    let x1 = 0,x2 = 0,y1 = 0,y2 = 0
    let movendoClicado = false
    Config.boxCanvas.addEventListener('mousedown', function(event){
        Config.box.lineWidth = Config.tamanho
        Config.box.strokeStyle = Config.color;
        x1 = event.offsetX
        y1 = event.offsetY 
        movendoClicado = true
    })
    Config.boxCanvas.addEventListener('mousemove', function(event){
        if(movendoClicado){
            x2 = event.offsetX
            y2 = event.offsetY
            
        }           
    })

    Config.boxCanvas.addEventListener('mouseup', function(event){
        Config.box.lineWidth = Config.tamanho
        Config.box.fillStyle = Config.color;
        logica.itemUm(box, x1,y1,x2,y2)
        movendoClicado = false
    })  
};
export function Circulos(logica) {
    let x1 = 0,x2 = 0,y1 = 0,y2 = 0
    let movendoClicado = false
    Config.boxCanvas.addEventListener('mousedown', function(event){
        Config.box.lineWidth = Config.tamanho
        Config.box.strokeStyle = Config.color;
        x1 = event.offsetX
        y1 = event.offsetY 
        movendoClicado = true
    })
    Config.boxCanvas.addEventListener('mousemove', function(event){
        if(movendoClicado){
            x2 = event.offsetX
            y2 = event.offsetY

        }           
    })

    Config.boxCanvas.addEventListener('mouseup', function(event){
        Config.box.beginPath();
        Config.box.lineWidth = Config.tamanho
        Config.box.fillStyle = Config.color;
        logica.itemUm(Config.box, x1,y1,x2,y2)
        Config.box.stroke();
        movendoClicado = false
    })  
};
