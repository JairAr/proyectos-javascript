var estrellas=getImage("cute/Star");
var libro1=getImage("avatars/aqualine-sapling");
var libro2=getImage("avatars/aqualine-sapling");
var libro3=getImage("avatars/aqualine-sapling");
var libro4=getImage("avatars/aqualine-sapling");

var array = [{
    title: "The Giver",
    stars: 4,
    autor:"LOIS LOWRY",
    color:color(161, 39, 39),
    imagen:libro1,
    si:false
},
{
    title: "caballo de troya",
    stars: 4,
    autor:"J.J.BENITEZ",
    color:color(18, 230, 209),
    imagen:libro2,
    si:true
},
{
    title: "cien años de soledad",
    stars: 4,
    autor: "Garcia Marquez",
    color:color(98, 67, 191),
    imagen:libro3,
    si:true
},
{
    title: "Odisea",
    stars: 4,
    autor:"Homero",
    color:color(39, 196, 47),
    imagen:libro4,
    si:false
},{
    title: "ESTOY BIEN",
    stars: 2,
    autor:"J.J BENITEZ",
    color:color(161, 39, 39),
    imagen:libro1,
    si:false
},
{
    title: "Cronica De Una Muerte Anunciada",
    stars: 4,
    autor:"Garcia Marquez",
    color:color(18, 230, 209),
    imagen:libro2,
    si:true
},
{
    title: "Don quijote de la mancha",
    stars: 4,
    autor: "Miguel de Cervantes",
    color:color(98, 67, 191),
    imagen:libro3,
    si:true
},
{
    title: "Amor en los tiempos del colera",
    stars: 4,
    autor:"Garcia Marquez",
    color:color(39, 196, 47),
    imagen:libro4,
    si:true
}];


var librero=120;
var libros=10;
var librosx=5;

fill(173, 117, 33);
rect (0,librero,width,10);


for( var i=0; i<array.length; i++){
    
    if(i%4===0&&i!==0 ){
      librero += 121; 
      fill(186, 170, 147);
      rect (0,librero,width,10);
      libros +=123;
      libros +=1;
      librero=4;
     }
     if(i%4===0&&i!==0 ){
         librosx =11;
     }
    var loscolores=array[i].color;
    fill(loscolores);
    rect(librosx,libros,94,100);
    
    fill(0);
    text(array[i].title,14+librosx,10+libros,66,117);
    

var lasestrellas =  array[i].stars;
for(var x=0; x <lasestrellas; x++){
    image(estrellas, 8 + x * 20 + librosx,70+libros,20,30);

    }

var Elautor =array[i].autor;
fill(255, 0, 0);
text(Elautor,13 + librosx,libros+70);

if(!array[i].si){
image(array[i].imagen,librosx,libros,30,30);

}
librosx+=100;
 }