export const CirculoLogica1 = [
    (box, x1,y1,x2,y2) => {
        box.arc(x1, y1,x2-x1, y1-y2, Math.PI * 2, true);
    },
];