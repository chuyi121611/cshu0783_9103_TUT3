var song;
var fft;
var colorR, colorG, colorB;

function preload() {
    inputbtn = createFileInput((file) => {
        song = loadSound(file);
        document.getElementsByTagName("input")[0].setAttribute("type", "hidden");
        alert("Click on the screen to play or pause");
    });
    var inputELE = document.getElementsByTagName("input")[0];
    inputbtn.position(windowWidth / 2 - 120, 15);
    inputELE.style.backgroundColor = '#fe00e8';
    inputELE.style.height = '42px';
    inputELE.style.padding = '10px';
  song = loadSound("sample-visualisation.mp3")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fft = new p5.FFT(0.9);

    colorR = random(0, 255);
    colorG = random(0, 255);
    colorB = random(0, 255);
}

function draw() {
    background(33);

    var spectrum = fft.analyze();

    noStroke();
    fill(colorR, colorG, colorB);

    for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp, 0, 256, height, 0);
        rect(i * (width / spectrum.length), y, width / spectrum.length - 2, height - y);
    }
}

function mouseClicked() {
    if (song && song.isPlaying()) {
        song.pause();
        noLoop();
    } else if (song) {
        song.play();
        loop();
    }
}

function keyPressed() {
    if (keyCode === 32) {  // Space key to change colors
        colorR = random(0, 255);
        colorG = random(0, 255);
        colorB = random(0, 255);
    }
}
