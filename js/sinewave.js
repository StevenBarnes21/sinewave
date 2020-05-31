"use strict"

let wave = 50;
let amp  = 50;
let line = 1;
let h = 0;
let color = `hsl(${h}, 100%, 50%)`;
let rainbowChecked = true;

function getNextColor(h) {
  return `hsl(${h}, 100%, 50%)`;
}

window.onload = () => {
 
  let ampOutput  = document.getElementById('amp-span');
  let waveOutput = document.getElementById('wave-span');
  let lineOutput = document.getElementById('line-span');
  
  let waveSlider = document.getElementById('wave');
  waveSlider.addEventListener('input', ()=> {
    wave = waveSlider.value;
    waveOutput.textContent = wave;
    run();
  });
  
  let ampSlider = document.getElementById('amp');
  ampSlider.addEventListener('input', (e) => {
    amp = e.target.value;
    ampOutput.textContent = amp;
    run();
  });
  
  let lineSlider = document.getElementById('line');
  lineSlider.addEventListener('input', (e) => {
    line = e.target.value;
    lineOutput.textContent = line;
    run();
  });
  
  let rainbowCheckbox = document.getElementById('rainbow');
  rainbowCheckbox.addEventListener('input', (e) => {
    rainbowChecked = e.target.checked;
    run();
  });
  
  // Runs when the program first starts
  run();
};

function run() {
  const canvas = document.querySelector('canvas');
  canvas.width = 250;
  canvas.height = 250;
  canvas.style.background = '#AAA';
  const c = canvas.getContext('2d');
  
  // Move the starting point to the centre of the canvas.
  c.translate(0, canvas.height/2);
  
  // Used to make the sine wave start going up first.
  c.scale(1, -1);
  
  
  for(let angle = 0; angle < 400; angle += 0.01) {
    
    if(rainbowChecked) {
      c.fillStyle = getNextColor(h);
      h++;
      h = h < 360 ? h : 0;  
    } else {
      c.fillStyle = '#333';
    }
    
    let x = angle * wave;
    let y = Math.sin(angle) * amp;
    c.beginPath();
    c.moveTo(x, y);
    c.arc(x, y, line, 0, Math.PI*2, true);
    c.fill();
  }
}