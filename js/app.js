let ctx;
let stars = [];

function setup() {
    ctx  = document.querySelector("canvas").getContext("2d");
    angleMode(DEGREES);
    createCanvas(500, 500);
    stars.push(new Star(width/2,height/2,200,0));
    //stars.push(new Star(width/2+200,height/2,200,30));
    //stars.push(new Star(width/2-200,height/2,200,60));
    //stars.push(new Star(width/2,height/2-200,200,90));
    
    
}

function draw() {
    background(255);
    stars.forEach(star => {
        star.render();
        star.update();
    });
    
}

