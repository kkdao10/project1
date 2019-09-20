var screen = 0;
var bg;
var x = 200;
var y = 650;
var img;
var apple;
var cheese;
var milk;
var chips;
var candybar;
var lettuce;
var carrott;
var brocolli;
var pizza;
var soda;
var steak;
//variable for point each time he eats
var score = 0;
var timerValue = 60;
var startButton;




var x0 = 200;
var y0 = 0;
var y0_speed = 5;
var x1 = 100;
var y1 = 0;
var y1_speed = 5;
var x2 = 350;
var y2 = 0;
var y2_speed = 5;
var x3 = 325;
var y3 = 0;
var y3_speed = 7;
var x4 = 367;
var y4 = 0;
var y4_speed = 4;
var x5 = 405;
var y5 = 0;
var y5_speed = 5;
var x6 = 513;
var y6 = 0;
var y6_speed = 5;
var x7 = 48;
var y7 = 0;
var y7_speed = 3;
var x8 = 700;
var y8 = 0;
var y8_speed = 4;
var x9 = 158;
var y9 = 0;
var y9_speed = 4;
var x10 = 187;
var y10 = 0;
var y10_speed = 4;




var song;
var sound;



function preload() {

  //load song file
  song = loadSound('milesbeyond.mp3');
  //sound = loadSound('eating.mp3';)

}


function setup() {
  bg = loadImage('background.png')

  song.setVolume(0.3);
  song.play();
  //sound.setVolume(0.2);


  createCanvas(800, 700);


  img = loadImage('character.png');
  apple = loadImage('apple.png');
  cheese = loadImage('cheese.png');
  milk = loadImage('milk.png');
  soda = loadImage('soda.png');
  pizza = loadImage('pizza.png');
  chips = loadImage('chips.png');
  candybar = loadImage('candybar.png');
  lettuce = loadImage('lettuce.png');
  carrot = loadImage('carrot.png');
  cookie = loadImage('cookie.png');
  steak = loadImage('steak.png');





}






//function conditions where screen changes
function draw() {
  if (screen == 0) {
    startScreen();
  }
  // else if(screen ==1)
  // {
  //   introScreen();
  // }
  else if (screen == 1) {
    gameOn();
  }

}

//first start screen
function startScreen() {
  background(245, 237, 22)
  fill(0)
  textAlign(CENTER);
  textSize(18);
  text('WELCOME TO FOOD WIZ CATCHER', width / 2, height / 2)
  text('click to play', width / 2, height / 2 + 20);

  //	reset();
}

// function introScreen()
// {
//   background(245,237,22)
//   fill(255)
//   textAlign(CENTER);
//   textSize(20);
//   text('Instructions',700, 700)
//   text('move the left and right arrows to move character',width/3,height/3)
//   text('objective collect as many healthy foods before the timer runs out!',width/4,height/4)
//   text('click to play', width / 2, height / 2 + 20);
//
// }


function gameOn()

{

  textAlign(CENTER);
  timeIt();
  //image background
  background(bg);

  textSize(25);
  fill(255);
  //display text and score
  text("Nutritional Food: " + score, 130, 50);



  stroke(150);

  fill(255, 0, 0);
  if (timerValue >= 60) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 11) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) { //display Game Over and stop loop of the game
    text('GAME OVER', width / 2, height / 2 + 30) && noLoop();
  }




  if (y0 > height + 18) {
    y0 = -8;
    x0 = random(40, 700);
    y0_speed = random(1, 4);
  }

  y0 += y0_speed;
  image(apple, x0, y0, 70, 70);


  if (dist(x0, y0, x, y) < 25) {
    y0 = -8 && score++; //&& sound.play() ;
    /////this is collision & count score each time collison
  }




  if (y1 > height + 15) {
    y1 = -9;
    x1 = random(35, 712);
    y1_speed = random(1, 5);
  }
  //
  y1 += y1_speed;
  image(cheese, x1, y1, 70, 70);

  if (dist(x1, y1, x, y, ) < 20) {
    y1 = -9 && score++;
  }


  if (y2 > height + 15) {
    y2 = -10;
    x2 = random(15, 707);
    y2_speed = random(1, 3);
  }

  y2 += y2_speed;
  image(milk, x2, y2, 70, 70);

  if (dist(x2, y2, x, y) < 20) {
    y2 = -10 && score++;
  }


  if (y3 > height + 15) {
    y3 = -8;
    x3 = random(20, 687);
    y3_speed = random(1, 4);
  }

  y3 += y3_speed;
  image(lettuce, x3, y3, 70, 70);

  if (dist(x3, y3, x, y) < 20) {
    y3 = -8 && score++;
  }

  if (y4 > height + 15) {
    y4 = -8;
    x4 = random(10, 700);
    y4_speed = random(1, 4);
  }

  y4 += y4_speed;
  image(soda, x4, y4, 70, 70);

  if (dist(x4, y4, x, y) < 20) {
    y4 = -8;
  }

  if (y5 > height + 15) {
    y5 = -8;
    x5 = random(20, 689);
    y5_speed = random(1, 4);
  }

  y5 += y5_speed;
  image(pizza, x5, y5, 70, 70);

  if (dist(x5, y5, x, y) < 20) {
    y5 = -8;
  }

  if (y6 > height + 15) {
    y6 = -8;
    x6 = random(20, 705);
    y6_speed = random(1, 8);
  }

  y6 += y6_speed;
  image(chips, x6, y6, 70, 70);

  if (dist(x6, y6, x, y) < 20) {
    y6 = -8;
  }

  if (y7 > height + 15) {
    y7 = -8;
    x7 = random(20, 717);
    y7_speed = random(1, 6);
  }

  y7 += y7_speed;
  image(candybar, x7, y7, 70, 70);

  if (dist(x7, y7, x, y) < 20) {
    y7 = -8;
  }

  if (y8 > height + 15) {
    y8 = -8;
    x8 = random(8, 723);
    y8_speed = random(1, 6);
  }

  y8 += y8_speed;
  image(carrot, x8, y8, 70, 70);

  if (dist(x8, y8, x, y) < 20) {
    y8 = -8 && score++;
  }

  if (y9 > height + 15) {
    y9 = -8;
    x9 = random(17, 723);
    y9_speed = random(1, 6);
  }

  y9 += y9_speed;
  image(steak, x9, y9, 70, 70);

  if (dist(x9, y9, x, y) < 20) {
    y9 = -8 && score++;
  }

  if (y10 > height + 15) {
    y10 = -8;
    x10 = random(20, 723);
    y10_speed = random(1, 6);
  }

  y10 += y10_speed;
  image(cookie, x10, y10, 70, 70);

  if (dist(x10, y10, x, y) < 20) {
    y10 = -8;
  }




  //background(0);
  keyPressed();
  image(img, x, y, 100, 100);




  if (x >= 725) {
    x = 725;
  }
  if (x <= 10) {
    x = 10;
  }



}




//var ballz = class
//{
//constructor(xpos)
//{
//this.xpos = xpos;
//this.ypos = 0;
//}
//limit()
//{
//if (this.ypos>=400)
//{
//this.ypos =0;
//this.xpos = random (400);
//}

//}

//balldraw()
//{
// ellipse(this.xpos,this.ypos,40,40);
//this.ypos = this.ypos + 10;
//}

//}

function keyPressed() {
  //if (keyCode === UP_ARROW) {
  //  y = y - 10;
  //  } else if (keyCode === DOWN_ARROW) {
  //   y = y + 10;
  //  }
  if (keyCode == LEFT_ARROW && keyIsPressed) {
    x = x - 8;
  } else if (keyCode == RIGHT_ARROW && keyIsPressed) {
    x = x + 8;
  }

}

function timeIt() {
  if (timerValue > 0 && frameCount % 60 == 0) {
    timerValue--;
  }
}




function mousePressed() {
  if (screen == 0) {
    screen = 1;
  }
  // if(screen==1)
  // {
  //   screen==2)
  // }
}
