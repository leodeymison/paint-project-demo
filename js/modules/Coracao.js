const coracaoLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2,y1);},           
    (box, x1,y1,x2,y2) => {box.quadraticCurveTo(((x1+x2)/2)+(((x2-x1)/6)*1.4),y1-((y1-y2)/12),((x1+x2)/2)+(((x2-x1)/6)*2.4),y1-((y1-y2)/3))}, 
    (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2+(((x2-x1)/12)*0.1),y2+((y1-y2)/2),x2-((x2-x1)/18),y2+((y1-y2)/3))}, 
    (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x2-((x2-x1)/5),y2-((x1-x2)/18),(x1+x2)/2,y2+((y1-y2)/3))},
    (box, x1,y1,x2,y2) => {box.quadraticCurveTo(x1+((x2-x1)/5),y2-((x1-x2)/18),x1+((x2-x1)/18),y2+((y1-y2)/3))},
    (box, x1,y1,x2,y2) => {box.quadraticCurveTo(((x1+x2)/2)-(((x2-x1)/6)*3),y1-((y1-y2)/2),((x1+x2)/2)-(((x2-x1)/6)*2.4),y1-((y1-y2)/3))}, 
    (box, x1,y1,x2,y2) => {box.quadraticCurveTo((x1+x2)/2-(((x2-x1)/6)*1.4),y1-((y1-y2)/12),(x1+x2)/2,y1)},  
]