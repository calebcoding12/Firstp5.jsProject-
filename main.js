function preload(){
}
function setup(){
    canvas = createCanvas(600,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,50,100,500,400);
    circle(50,50,100);
    fill("blue");
    circle(550,50,100);
    fill("blue");
    circle(50,550,100);
    fill("blue");
    circle(550,550,100);
    fill("green");
    rect(30,90,40,420)
    fill("green");
    rect(530,90,40,420)
    fill("green");
    rect(30,90,540,40)
    fill("green");
    rect(30,500,540,40)
    fill("blue");
}
function take_snapshot(){
    save("myimage.png");
}