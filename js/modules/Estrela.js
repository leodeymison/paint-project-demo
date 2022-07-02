const estrela4pontasLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo((x1+x2)/2, y1)},           
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)+((x2+x1)/16)/2), (((y2+y1)/2))+((y2+y1)/12)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)}, 
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)+((x2+x1)/16)/2), ((y2+y1)/2)+((y2-y1)/12)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo((x1+x2)/2, y2)},
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2), ((y2+y1)/2)+((y2-y1)/12)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2), ((y1+y2)/2)+((y1+y2)/12)/2)},  
]
const estrela5pontasLogica1 = [
    (box, x1,y1,x2,y2) => {box.moveTo(x1, y1)},           
    (box, x1,y1,x2,y2) => {box.lineTo((x2+x1)/2, (((y2+y1)/2))+((y2+y1)/6)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x2, y1)}, 
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)+((x2+x1)/16)/2), ((y1+y2)/2)+((y1+y2)/12)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo(x2, (y1+y2)/2)},
    (box, x1,y1,x2,y2) => {box.lineTo(((x2+x1)/2)+((x2-x1)/12), ((y2+y1)/2)+((y2-y1)/12)/2)},  
    (box, x1,y1,x2,y2) => {box.lineTo((x2+x1)/2, y2)},
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2),  ((y2+y1)/2)+((y2-y1)/12)/2)},
    (box, x1,y1,x2,y2) => {box.lineTo(x1, (y1+y2)/2)},
    (box, x1,y1,x2,y2) => {box.lineTo((((x2+x1)/2)-((x2+x1)/16)/2), ((y1+y2)/2)+((y1+y2)/12)/2)},  
]