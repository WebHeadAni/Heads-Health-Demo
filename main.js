heartrate = Math.random(60, 150)
stress = Math.random(5,350)
BP = Math.random(5,120)

document.getElementById("rate").innerHTML = heartrate + " BPM ";
document.getElementById("pescals").innerHTML = stress + " Pescals ";
document.getElementById("mmHg").innerHTML = BP + " mmHg ";

Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function TSFWV() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="CC" src="'+ data_uri +'">';
    });
}
console.log('ml5 version - ',ml5.version );
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/r8dKAyieU/model.json', model_loaded);
function model_loaded(){
    console.log('model loaded');
}
prediction1 = "";
prediction2 = "";
function speak(){
    var synth = window.speechSynthesis;
    speak1 = " The first prediction is -" + prediction1;
    speak2 = " the second prediction is -" + prediction2;
    var utterthis = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(utterthis);
}

function Check() {
    image = document.getElementById('CC');
    classifier.classify( image, gotResults);
}

function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    else{ 
        console.log(results);
        document.getElementById('result_emotion_name').innerHTML = results[0].label;
        document.getElementById('result_emotion_name2').innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(results[0].label == "Ok") {
            document.getElementById("update_emoji").innerHTML = "👌";
        }
        if(results[0].label == "Peace Out") {
            document.getElementById("update_emoji").innerHTML = "✌";
        }
        if(results[0].label == "Thumbs Up/ Good") {
            document.getElementById("update_emoji").innerHTML = "👍";
        }
        if(results[0].label == "Ok") {
            document.getElementById("update_emoji").innerHTML = "👌";
        }
        if(results[0].label == "Peace Out") {
            document.getElementById("update_emoji").innerHTML = "✌";
        }
        if(results[0].label == "Thumbs Up/ Good") {
            document.getElementById("update_emoji").innerHTML = "👍";
        }
    }
}