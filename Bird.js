class Bird {
    constructor(x,y,r){
        
        this.radius = r;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x,y,r);
        World.add(myWorld,this.body);
    }
    display(){
       // console.log(this.x,this.y);
        var pos = this.body.position;
        fill("red");
        circle(pos.x,pos.y,this.radius);
    }
}