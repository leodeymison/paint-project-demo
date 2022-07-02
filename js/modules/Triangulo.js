const tringuloLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)}, // right
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, //left
    (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)}, // top
]

const tringuloRetanguloLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)}, // right
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, //left
    (box, x1,y1,x2,y2) => {box.lineTo(x1, y2)}, // top
]