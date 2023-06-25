class Cannonball {
    constructor (x,y) {
      var options={
    restitution: 0.65,
    friction:1.0,
    density: 1.3,    
      isStatic:true }

      this.image = loadImage("assets/cannonball.png");
      this.radius = 40;
      this.body= Bodies.circle(x,y,this.radius, options);
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
       image (this.image,50, 20,this.radius, this.radius);
       pop ()
    }
    }