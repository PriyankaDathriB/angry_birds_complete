class Box {
    constructor(x,y,w,h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,w,h,{restitution:0.5});
        World.add(myWorld,this.body);
    }
    display(){
       // console.log(this.x,this.y);
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);
    }
}