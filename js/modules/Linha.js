import { Config } from '../config/Config.js';
import { Events } from '../config/Events.js';

export const linhareta = [
    (box, x1,y1,x2,y2) => box.moveTo(x1,y1),
    (box, x1,y1,x2,y2) => box.lineTo(x2,y2)
];

export function LinhaLivre(stop = false){
    if (Config.clicado && Config.movendo && Config.posAnterios){
        Events.desenharLinha({pos: Config.pos, posAnterior: Config.posAnterios},Config.box)
        Config.movendo = false
    }
    Config.posAnterios = {x: Config.pos.x, y: Config.pos.y}
    setTimeout(LinhaLivre, 1)
};