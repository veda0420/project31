class Pinko{
    constructor(x,y){
        var options={isStactic:true,friction:0,restituition:1}
        this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        World.add(world,this.body)
        
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        noStroke()
fill(255)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)
pop()
        

    }
}