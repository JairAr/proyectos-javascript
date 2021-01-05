background(66, 168, 245);
var bodyLength = 120;
var bodyHeight = 74;
var bodyColor = color(255, 255, 255);

   var drawpeces = function(centerX, centerY,tailWidth){
    
   noStroke();
   fill(bodyColor);

   ellipse(centerX, centerY, bodyLength, bodyHeight);
 
   var tailWidth = bodyLength/4;
   var tailHeight = bodyHeight/2;
   triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
         

   fill(33, 33, 33);
   ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

};

    draw  = function() 
{

    fill(163, 124, 96);
    ellipse(13,391,24,23);
    ellipse(39,391,24,24);
    ellipse(64,391,24,24);
    ellipse(89,391,24,24);
    ellipse(115,391,24,24);
    ellipse(141,391,24,24);
    ellipse(167,391,24,24);
    ellipse(192,391,24,24);
    ellipse(217,391,24,24);
    ellipse(244,391,24,24);
    ellipse(270,391,24,24);
    ellipse(296,391,24,24);
    ellipse(321,391,24,24);
    ellipse(347,391,24,24);
    ellipse(373,391,24,24);

    fill(145, 115, 89);
    ellipse(12,365,24,24);
    ellipse(39,365,24,24);
    ellipse(64,365,24,24);
    ellipse(89,365,24,24);
    ellipse(115,365,24,24);
    ellipse(141,365,24,24);
    ellipse(167,365,24,24);
    ellipse(192,365,24,24);
    ellipse(217,365,24,24);
    ellipse(244,365,24,24);
    ellipse(270,365,24,24);
    ellipse(296,365,24,24);
    ellipse(321,365,24,24);
    ellipse(347,365,24,24);
    ellipse(373,365,24,24);

   
};

drawpeces(297,154,4,26,color(111, 150, 113));
drawpeces(274,62,102,44, color(135, 49, 49));
drawpeces(297,268,143,129, color(255, 0, 0));
drawpeces(90,45,123,87,color(204, 157, 157));
drawpeces(83,208,100,100,color(39, 97, 214));


var drawBubbles = function (){
    
var bX = random (65,199);
var bY = random (72,200);
var bZ = random (74,200);
var bW = bW;

fill(255, 255, 255);
ellipse(bX,bY,bZ,bW);

};

 drawBubbles(); 