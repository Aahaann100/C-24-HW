class Iron {
    constructor() {
      var options = {
        'density':6,
        'friction': 2,
        'restitution':0.2
      };
      this.body = Bodies.rectangle(300,200,50, 50, options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      
  
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(3);
      stroke('pink')
      fill('blue')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };