function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	background(0)
	noFill()
	
	for(var x=0;x<width;x=x+50)
	  	{	
	for(var y=0;y<height;y=y+50)
				{	 
colorMode(HSB)
var J = map(mouseX,0,width,0,100);
var h=map(x,0,width,0,50)
var s=map(mouseY,50,height,25,200)//隨著滑鼠移動會變色
var b=map(mouseX,10,width,255,130)
	stroke(h,s,b)
	ellipse(x+25,y+25,50+J)//大圓
  stroke(h,s,b)
	rect(x,y,50+J)
  stroke(h,s,b)
	ellipse(x+50,y+50,25+J)//小圓
  ellipse(x+75,y+75,75+J)//最大的圓
					
				}
			}
}

