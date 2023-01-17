function setup(){
    canvas = createCanvas(550, 500);
    canvas.position(560, 200);

    webcam = createCapture(VIDEO);
    webcam.size(550, 500);

    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){

}

function preload(){

}

function modelLoaded(){
    console.log("O modelo foi carregado");
}

function gotPoses(results){
    if(results.lenght > 0){
        console.log(results);
    }
}