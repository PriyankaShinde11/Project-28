class Launch{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
         
        this.pointB = pointB

        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fly(){
        this.launch.bodyA = null;
    }
    attach(bodyA){
        this.launch.bodyA = bodyA;
    }

    display(){


       
      
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position;
            var pointB = this.pointB;
            //push();
            strokeWeight(5);
            stroke(48,22,8);
            
            line(pointA.x,pointA.y,pointB.x,pointB.y);

           // imageMode(CENTER);
        //image(this.image, 0, 0,10, 20);
            
            //pop();
        }

    }
    
}