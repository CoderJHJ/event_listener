const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const circle = document.querySelector('.circle');
const getBgcolor =(selectedElement)=>{
return window.getComputedStyle(selectedElement).backgroundColor
};
/* nicher code gulo holo explaine code */
/*const redColorElement = getBgcolor(red);
const greenColorElement = getBgcolor(green);
const blueColorElement = getBgcolor(blue);


red.addEventListener('mouseenter',()=>{
    circle.style.backgroundColor = redColorElement;
});
green.addEventListener('mouseenter',()=>{
    circle.style.backgroundColor = greenColorElement;
});
blue.addEventListener('mouseenter',()=>{
    circle.style.backgroundColor = blueColorElement;
});*/
/* nicher code gulo hocce uporere code er short method */
const magicColor = (element,color)=>{
    return element.addEventListener('mouseenter',()=>{
        circle.style.backgroundColor = color;
    })
};
magicColor(red,getBgcolor(red));
magicColor(green,getBgcolor(green));
magicColor(blue,getBgcolor(blue));