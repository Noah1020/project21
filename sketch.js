var wall, thickness;
var bullet, speed, weight;
var Damage;


function setup(){
    createCanvas(2000,600);
    bullet = createSprite(1000,200,20,10);
    thickness = random(22,83);
    wall = createSprite(1200, 200, 50, height/2);
    speed = random(223,321);
    weight = random(30,52)
    Damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
}

function draw(){
  background("white");
  bullet.velocityX = speed;
    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
        bullet.velocityX = 0;
        
        if (Damage > 10){
            wall.shapeColor = color(255,0,0);
        }

        if (Damage < 10){
            wall.shapeColor = color(0,255,0);
        }

    }
    drawSprites();
}
