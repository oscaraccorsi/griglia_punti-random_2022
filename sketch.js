let baseUrlPictures = 'https://oscaraccorsi.github.io/pictures/';

let x = [];
let y = [];


let inc=20;
//let dist=20;

let img;
let palette = [];
let palettes = [];

let marginX, marginY;
let dist = [8, 13, 21, 34, 55, 30, 35, 40, 45, 50];
let count;  
let dst;
let frCnt;

let oneCol;

let coeffX, coeffY;
let sec, min, h, day;   

function preload() {
  palettes[0] = loadImage(baseUrlPictures + 'schneider.jpg');
  palettes[1] = loadImage(baseUrlPictures + 'schneider01.jpg');
  palettes[2] = loadImage(baseUrlPictures + 'schneider01.png');
  palettes[3] = loadImage(baseUrlPictures + 'schneider02.jpg');
  palettes[4] = loadImage(baseUrlPictures + 'schneider03.jpg');
  palettes[5] = loadImage(baseUrlPictures + 'schneider04.jpg');
  palettes[6] = loadImage(baseUrlPictures + 'schneider05.jpg');
  palettes[7] = loadImage(baseUrlPictures + 'schneider06.jpg'); 
  palettes[8] = loadImage(baseUrlPictures + 'schneider07.jpg'); 
  palettes[9] = loadImage(baseUrlPictures + 'schneider08.jpg'); 
  palettes[10] = loadImage(baseUrlPictures + 'schneider09.png'); 
  palettes[11] = loadImage(baseUrlPictures + 'schneider10.png');
  palettes[12] = loadImage(baseUrlPictures + 'schneider11.png');
  palettes[13] = loadImage(baseUrlPictures + 'schneiderMio.png');
  palettes[14] = loadImage(baseUrlPictures + 'schneider12.jpg');  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  x.delete;
  y.delete;
  createCanvas(windowWidth, windowHeight);
  //     background(10); 
  frameRate(60);
  rectMode(CENTER);
  h = hour()%12;
  
  min = minute();
  count = round(min/6);
  dst = dist[count];
  
  img = palettes[h];
  console.log(h, dst);   
  


//------------------------------------------------palette 
  img.resize(200, 0);
  img.loadPixels();
  
  for (let i=0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i]; 
    let g = img.pixels[i+1]; 
    let b = img.pixels[i+2]; 
    let alpha = round(random(200));
    let c = color(r, g, b);
    palette.push(c);    
  }
  oneCol = random(palette);
  
//------------------------------------------------arrays
  marginX = width/10;
  marginY = height/10;
  coeffX = width/dst;
  coeffY = height/dst;
  for (let i = marginX; i < width-marginX; i += (width-marginX*2)/coeffX) {
    for (let u = marginY; u < height-marginY; u += (height-marginY*2)/coeffY) {
      x.push(i);
      y.push(u);
      fill(oneCol);
      noStroke();
      //square(i, u, 5, 2);  no grid at the beginning  
    }
  }
  
}
function draw() { 
  let frameSec = 60;
  let frameMin = 60*60;
  let time = (frameMin*1)+(frameSec+33);
  
  fill(random(palette));
  noStroke();
  square(random(x), random(y), 7, 2); 
 
  if (frameCount >= time) {
    for (let i = marginX; i < width-marginX; i += (width-marginX*2)/coeffX) {
      for (let u = marginY; u < height-marginY; u += (height-marginY*2)/coeffY) {
        x.pop(i);
        y.pop(u); 
      }
    }
    setup(); 
    frameCount = 0;
  } 
}

function keyPressed() {
  clear();
  setup();
}