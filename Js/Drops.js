class Drops{
    constructor(x,y){
        var options = {
            restitution: 0.1,
            friction: 0.1
        }
       
        this.body = Bodies.circle(x,y,5,options);
        this.r = 5;
        World.add(world,this.body);
     }
     update(){
         if(this.body.position.y > height){
             Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
         }
     }
     display(){
         var pos = this.body.position;
         ellipseMode(CENTER);
         fill("blue");
       ellipse(pos.x,pos.y,this.r,this.r);
     }
 }