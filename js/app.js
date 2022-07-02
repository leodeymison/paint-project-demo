import { Render } from "./config/Render.js";
import { Config } from './config/Config.js';
import { Events } from './config/Events.js';
import { LinhaLivre, linhareta } from './modules/Linha.js'
import { moldesSimples } from './config/Forms.js'

// config == config 
export function start(){    
    Config.boxCanvas.width = Config.width
    Config.boxCanvas.height = Config.height

    // LinhaLivre(),
    moldesSimples(linhareta),


    Events.LimpaCanvas(Config.box)
    Events.MudarTamanhoDaLinha()
    Events.mudarDeCor()


    Render()
}
