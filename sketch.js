let red;
let orange;
let yellow;
let green;
let cyan;
let blue;
let magenta;
let brown;
let white;
let black;
let x = 600
let y = 50;
let colorSelected;

function setup() {
  createCanvas(x + y, x);
  strokeWeight(5);
  colorSelected = color(0);

  red = color('red');
  orange = color('orange');
  yellow = color('yellow');
  green = color('green');
  cyan = color('cyan');
  blue = color('blue');
  magenta = color('magenta');
  brown = color('brown');
  white = color('white');
  black = color('black');

}

function draw() {
 



colors();

if (mouseIsPressed){
  if (mouseX > 25 && mouseX < x + y){
    stroke(colorSelected);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
  else{
    changeColor();
  }
 }
}

function colors(){
  let pallet = [red,orange,yellow,green,cyan,blue,magenta,brown,white,black];

  for (let i =0;i < pallet.length;i++){
    fill(pallet[i]);
    noStroke();
    rect( 2, i * 30, y - 25, 25);
  }
}

function changeColor(){
  let pallet = [red,orange,yellow,green,cyan,blue,magenta,brown,white,black];

  for (let i = 0;i < pallet.length; i++){
    if( 
      mouseX >= 2 &&
      mouseX <= 25 &&  
      mouseY >= i * 30 &&
      mouseY <= (i + 1) * 30
      ){
      colorSelected = pallet[i];
     }
   }
 }

