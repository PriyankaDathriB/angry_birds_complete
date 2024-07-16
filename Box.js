class Box extends BaseClass{
    constructor(x,y,w,h){
        super(x,y,w,h);
    }
    display(){
      fill("brown");
      super.display();
    }
}