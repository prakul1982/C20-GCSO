var speed,speed2,speed3,weight,weight2,weight3,car,car2,car3,wall,
wall2,wall3,deformation,deformation2,deformation3,line,line2;

function setup() {

createCanvas(1600,600);

speed = (55,90);
speed2 = (55,90);
speed3 = (55,90);

weight = random(400,1500);
weight2 = random(400,1500);
weight3 = random(400,1500);

car = createSprite(50,100,80,50);
car.velocityX = speed;

car2 = createSprite(50,300,80,50);
car2.velocityX = speed;

car3 = createSprite(50,500,80,50);
car3.velocityX = speed;

wall = createSprite(1500,100,60,height/4);

wall2 = createSprite(1500,300,60,height/4);

wall3 = createSprite(1500,500,60,height/4);

deformation = 0.5*weight*speed*speed/22500;
deformation2 = 0.5*weight2*speed2*speed2/22500;
deformation3 = 0.5*weight3*speed3*speed3/22500;

line = createSprite(800,200,1600,15);
line2 = createSprite(800,400,1600,15);

}

function draw() {

background("black");  

if (istouching(wall,car)){

car.velocityX = 0;

deformation;

if ( deformation<110 ){

car.shapeColor = ("green");

}

if ( deformation > 100){

car.shapeColor = ("yellow");

}

if ( deformation>180 ){

car.shapeColor = ("red")

}

}
if (istouching(wall2,car2)){

    car2.velocityX = 0;
    
    deformation2;
    
    if ( deformation2<110 ){
    
    car2.shapeColor = ("green");
    
    }
    
    if ( deformation2 > 100){
    
    car2.shapeColor = ("yellow");
    
    }
    
    if ( deformation2>180 ){
    
    car2.shapeColor = ("red")
    
    }
    
    }
    if (istouching(wall3,car3)){

        car3.velocityX = 0;
        
        deformation3;
        
        if ( deformation3<110 ){
        
        car3.shapeColor = ("green");
        
        }
        
        if ( deformation3 > 100){
        
        car3.shapeColor = ("yellow");
        
        }
        
        if ( deformation3>180 ){
        
        car3.shapeColor = ("red")
        
        }
        
        }
drawSprites();

}
