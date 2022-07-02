const setaParaBaixoLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo((x2+x1)/2, y1)},           
    (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x2-((x2-x1)/3), (y1+y2)/2)}, 
    (box, x1,y1,x2,y2) => {box.lineTo(x2-((x2-x1)/3),y2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x1+((x2-x1)/3),y2)},
    (box, x1,y1,x2,y2) => {box.lineTo(x1-((x1-x2)/3), (y1+y2)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},
]