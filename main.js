//THIS CODE IS SERIOUSLY FUCKED. i cant read js and i fucked up somewhere badly and i think im going to have to study some js 
//before i can even come back to this. THIS IS A WARNING FOR THE HORRIBLE CODE LOGIC ERRORS YOURE ABOUT TO HAVE THE DISPLEASURE 
//OF WITNESSING. I AM SORRY.

const input = document.getElementById('input');

//a "random" value for amplitude
var amplitude = 40;

var interval = null;

// create web audio api elements
const audioCtx = new AudioContext(); //THIS is the initialization of the audio nodes
const gainNode = audioCtx.createGain();//this is what starts the audio and stuff

// create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
oscillator.type = "sine";
oscillator.start();
gainNode.gain.value = 0;

//define canvas variables
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); //-> the “ctx” is just the part of the canvas that we draw on. Think of it like the “screen”, or the first sheet of paper in a stack. It’s just the face of the whole canvas.
var width = ctx.canvas.width;
var height = ctx.canvas.height;

function line() {
    freq = pitch / 10000;
   y = height/2 + (amplitude * Math.sin(x * 2 * Math.PI * freq));
   ctx.lineTo(x, y);
   ctx.stroke();
   x = x + 1;
   counter++;
   if(counter > 50) {
       clearInterval(interval);
  }
}

//something called a map. im the map. im the map.
const notenames = new Map();
mapName.set("C", 261.6);
mapName.set("D", 293.7);
mapName.set("E",  329.6);
mapName.set("F", 349.2);
mapName.set("G", 392.0);
mapName.set("A", 440);
mapName.set("B", 493.6);

function frequency(pitch) {
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    oscillator.frequency.setValueAtTime(pitch, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 1);
}

//i love handles on buses like actually. anyways heres the thing that starts the thing 

function handle() {
    audioCtx.resume();
     var usernotes = String(input.value);
    frequency(notenames.get(usernotes)); 

}

//uh i didnt really get this part?
var counter = 0;
function drawWave() {
	counter = 0;
}

//this is the function that draws the sine wave onto the ctx screen 
function drawWave() {
    ctx.clearRect(0, 0, width, height); 
     //-> clears everything inside of our canvas, so that we get rid of any past sine waves
    x = 0;
    y = height/2;
    ctx.moveTo(x, y); 
    //-> move our pointer to the left-most middle of our canvas, so we always start drawing a new wave from here
    ctx.beginPath(); 
    //-> this method tells our computer that we’re ready to start painting!
    interval = setInterval(line, 20);
}