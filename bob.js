class Bob{
    constructor(x,y,r){
        var options={
            isStatic: true,
            resistution:0.3,
            friction:0,
            density:1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        //this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world,this.body);
    }
    display(){
        // var angle = this.body.angle;
             push();
            translate(this.body.position.x, this.body.position.y);
            //rotate(angle);
             imageMode(CENTER);
             ellipseMode(CENTER);
          ellipse(0,0,90,90);
           //image(this.image, 0,0,this.r*2, this.r*2);
             pop();
     }
}