var mode;
var value;

function setup ()
{
mode = 0;
value = 0;
createCanvas (800,800);
textSize(40);
resetSketch();
var button = createButton ("reset", 200,400);
button.mousePressed(resetSketch);

}

function resetSketch ()
{
  

}



function draw ()
{
clear();
if (mode == 0)
{
text('Hit ENTER to start', 400, 400)
}
if (mode == 1)
{
  ellipse(100,100,100,100);
}

}

function keyPressed ()
{
  if (keyCode === ENTER)
  {
        mode = 1;

  }

}
