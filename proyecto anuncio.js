background (20, 185, 255);
var a = 200;
var b = 200;
var total = 125;
fill(191, 36, 191);
textSize(30);
text("Shampoo for kids!", 16, 37);
textSize(16);
text("perfecto para jugar en la bañera!", 10, 87);
 draw= function() {
      rect(195,108,25,37);
       triangle(
       a-total/1.8,
       a-total/13.6,
       a-total/0.9,
       a+total/1.67,
       a-total/0.89,
       a-total/1.5);
    fill (194, 194, 194);
    ellipse(a, b, total*10/7, total);
    fill(0, 0, 0);
    ellipse(a+total/2, b-total/8, total/12, total/12);
 };