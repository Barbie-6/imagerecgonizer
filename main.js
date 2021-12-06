Webcam.set ({
    height: 350,
    width: 450,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById('camera');
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = "<img id='img_captured' src='" + data_uri + "'/>"; 
    });
}

console.log("ml5 - " + ml5.version);

classifier = ml5.imageClassifier("#");

function modelLoaded() {
    console.log("model is loaded");
}