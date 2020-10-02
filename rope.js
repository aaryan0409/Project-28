class Rope {
    constructor(body1,pointB){
        
        var options={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.04,
            length:10
              
        }
        this.rope=Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.rope);
        }
        fly(){
            this.rope.bodyA=null;
        }

        attach(body){
            this.rope.bodyA=body;
        }
        display(){
            if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.pointB;

            strokeWeight(2);
                                    
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            }
        }
}