var bullet,wall,lane1;

var speed,weight,thickness;




function setup() {
  createCanvas(800,400);

 speed = random(223,321);
 weight = random(30,52);
thickness = random(22,83);

  bullet = createSprite(100, 40, 25,10);
  wall = createSprite(700,40,thickness,70);
  lane1 = createSprite(1,90,1600,5);
  bullet.velocityX = speed;
  bullet.shapeColor="white";
  bullet.weight=weight;
  bullet.deformation=180;
  bullet.debug=true;

}

function draw() {
  background("black");  
bullet.collide(wall);

if(hasCollided(bullet,wall))
{
 bullet.velocityX=0;
 var damage =0.5 * weight * speed * speed/(thickness * thickness * thickness);
 if(damage>10)
{
 bullet.shapeColor = color(255,0,0);
}
if(damage<10)
{
 bullet.shapeColor = color(0,255,0);
}


}
  drawSprites();
}

function hasCollided(bullet,wall)
{
   bulletRightEdge = bullet.x + bullet.width;
   wallLeftEdge = wall.x;
   if(bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
     return false;
}