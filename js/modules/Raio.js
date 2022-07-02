const raiosLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo(x1, y2)},           
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)-((x2-x1)/8),y2+((y1-y2)/3))},  
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)-((x2-x1)/4),y2+((y1-y2)/3))}, 
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/8),y1-((y1-y2)/3))},  
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2),y1-((y1-y2)/3))},
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)},  
    (box, x1,y1,x2,y2) => {box.lineTo(((x1+x2)/2)+((x2-x1)/4), y1-((y1-y2)/3))},
    (box, x1,y1,x2,y2) => {box.lineTo((((x1+x2)/2)+((x2-x1)/4))+((x2-x1)/8), y1-((y1-y2)/3))},
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/8),y2+((y1-y2)/3))},
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/4),y2+((y1-y2)/3))}, 
    (box, x1,y1,x2,y2) => {box.lineTo((x2+x1)/2,y2)},
]