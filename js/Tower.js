class Tower {
constructor (x,y,width, height) {
  var options={  
  isStatic:true }
    
  this.image = loadImage("assets/tower.png");
  this.width = width;
  this.height = height;
  this.body= Bodies.rectangle(x,y,this.width,this.height, options);
  World.add(world,this.body)
}
display()
{
   var pos = this.body.position;
   var ang = this.body.angle;
   push ()
   translate(pos.x, pos.y);
   rotate (ang);
   imageMode (CENTER);
   image (this.image,50, 180,this.width, this.height);
   pop ()
}

}
