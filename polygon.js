class Polygon {
    constructor(x, y, radius) {
          var options = {
              isStatic:false,
              'restitution':0.01,
              'friction':0.5,
              'density':1.8
          }
    
          this.body = Bodies.circle(5,200,20);
          this.radius = radius;
          World.add(world, this.body);
        }
    
      display(){
        var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
      }
    
}