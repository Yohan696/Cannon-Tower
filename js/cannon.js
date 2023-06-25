class Cannon {
    constructor (x,y,width, height, angle) {
      
        this.x = x;
        this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
         }
    display()
    {
       if (keyDown(RIGHT_ARROW))
        {
            this.angle += 0.4 ;
        }
        if (keyDown(LEFT_ARROW))
        {
            this.angle -= 0.4 ;
        }
        
       push ()
       translate(this.x, this.y);
       rotate (this.angle);
       rect (10, 30, this.width, this.height, this.angle)
       pop ()
       arc(50, 55, 140, 200, PI, TWO_PI);
    }
    }