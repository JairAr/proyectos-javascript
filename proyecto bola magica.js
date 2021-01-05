fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(1, 5));
if (answer === 0) {
    fill(240, 237, 237);
    text("NO", 176, 200);
    text("IMPLEMENTED", 159, 229);
}else if ( answer === 2 ){
    fill(204, 255, 0);
    text("ALRATO", 159, 229);
}else if ( answer === 3 ){
    fill(209, 38, 81);
    text("TAL VEZ", 140, 229);
}else if ( answer === 4 ){
    fill(79, 80, 105);
    text("No lo creo", 159, 229);
}else {
    fill(212, 255, 246);
    text("SI",158,219);}