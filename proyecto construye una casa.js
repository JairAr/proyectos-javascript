background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);
for (var x=0;x<14;x++)
{
    for(var j=0;j<9;j++)
 {
    fill(133, 9, 9);
    rect(61+j*31, 151+x*15, 30, 12);
 }
}


fill(120, 80, 19);
rect(180, 280, 40, 77);

for(var i=0;i<4;i++)
{
  fill(245, 245, 245);
  rect(266-i*60, 180, 48, 48);
}
var pasto=getImage("cute/GrassBlock");
var planta=getImage("cute/TreeUgly");
for(var p=0;p<5;p++)
{
   image(pasto,0+p*90,328,90,100);
   image(planta,-61+p*90,315,90,92);
}