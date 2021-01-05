
var bodyX = 182;
var bodyY = 166;
var bodyW = 133;
var faceW = bodyW/3;

draw = function() {
    //es un gato aunque no lo parezca
    background(209, 12, 84);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 149);
    ellipse(bodyX-30, bodyY-84, faceW, 75); // face?
    ellipse(bodyX+34, bodyY-83, faceW, 75);
    fill(237, 232, 232);
    ellipse(bodyX-29, bodyY-8, faceW+-19, 35);
    ellipse(bodyX+22, bodyY-7, faceW+-19, 35);
    fill(10, 9, 9);
    ellipse(bodyX-1, bodyY+31, faceW+18, 30);
    fill(247, 242, 242);
    bodyW++;
};
