const poligono5Logica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)},     // right-botton
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, //left-botton
    (box, x1,y1,x2,y2) => {box.lineTo(x2+((x2-x1)/4), (y1+y2)/2.2)}, // left-top
    (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)},    //top-center
    (box, x1,y1,x2,y2) => {box.lineTo(x1-((x2-x1)/4), (y1+y2)/2.2)}, //right-top
];

const poligono6Logica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2, y1)},           // botton-center
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1+((y2-y1)/4))},  // left-botton
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y2+((y1-y2)/4))},  // left-top
    (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)},   // top-center
    (box, x1,y1,x2,y2) => {box.lineTo(x1, y2+((y1-y2)/4))},// right-top
    (box, x1,y1,x2,y2) => {box.lineTo(x1, y1+((y2-y1)/4))},  // right-botton
]