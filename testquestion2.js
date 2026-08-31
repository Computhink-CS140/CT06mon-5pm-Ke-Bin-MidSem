function setup(){
    createCanvas(600,600);
    background(220);

}
function draw(){
    for (let count = 0; count < 10; count++) {
        circle(50+count*25,50+count*25,25);
    }
}
