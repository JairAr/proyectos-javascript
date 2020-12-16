var xPos = 26;
var yPos = 372;
var xpos2,ypos2;
xpos2=391;
ypos2=127;

draw = function() {
    background(16, 26, 92);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    rect(3,370,38,61,0);
    xPos+=2;
    yPos--;
    fill(255, 252, 252);
    ellipse(xpos2,ypos2,10,10);
    xpos2-=2;
    ypos2++;
    fill(15, 14, 14);
    rect(232,192,165,214,0);
    fill(173, 168, 168);
    rect(251,212,40,30,0);
    rect(336,212,40,30,0);
    rect(251,275,40,30,0);
    rect(336,275,40,30,0);
    rect(336,335,40,30,0);
    rect(251,335,40,30,0);
    fill(255, 255, 255);
    ellipse(52,51,70,70);
};