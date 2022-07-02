const quadradoLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)}, 
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, 
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y2)}, 
    (box, x1,y1,x2,y2) => {box.lineTo(x1, y2)}, 
]

const quadradoLosangoLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2, y1)},     // right-botton
    (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)}, //left-botton
    (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)}, // left-top
    (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},    //right-top
]

const quadradoPintado = [
    (box, x1,y1,x2,y2) => {box.fillRect(x1, y1, x2-x1, y2-y1)},           
]
