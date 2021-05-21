class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.img=loadImage("can.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.t=255
      }
      display(){
        if (this.body.speed<10){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //rectMode(CENTER)
        //rect(0,0,this.width,this.height)
        imageMode(CENTER);
        image(this.img,0,0,120,50);
        pop();
        }
        else{
          Matter.World.remove(world,this.body)
          push()
          tint(225,this.t)
          image(this.img,this.body.position.x,this.body.position.y,120,50)
          this.t-=100
          pop()
        }
      }
}
