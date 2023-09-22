const container = document.querySelector('#container');
// console.log(container);
for(let i = 0; i < 16; i++){
    const box = document.createElement('div');
    
    box.id = `${i}`;
    box.style.width = '100px';
    box.style.height = '100px';
    
    box.style.borderWidth = '2px';
    box.style.borderStyle = 'solid';
    box.style.borderColor = 'black';

    box.style.gap = '10px';
    box.classList.add('innerbox');
    container.appendChild(box);
}

function randomColour(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}

function percent(x){
    let y = x - x * 10 / 100;

    return Math.round(y);
}

function darkenColour(rgbColor){

    let s = rgbColor.substring(4, rgbColor.length - 1);

    let x = s.split(",").map(Number).map(percent);

    return `rgb(${x[0]},${x[1]},${x[2]})`;
}


const boxes = document.querySelectorAll("div.innerbox");

boxes.forEach((box) =>{
    box.addEventListener('click', (e) =>{
        // console.log(typeof box.style.backgroundColor);
        // console.log(box.style.backgroundColor[2]);
        if(box.style.backgroundColor == ""){
            box.style.backgroundColor = randomColour();
        }
        else{
            box.style.backgroundColor = darkenColour(box.style.backgroundColor);
        } 
    })
})