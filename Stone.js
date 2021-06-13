class Stone {
    constructor() {
      var options = {
        'density':3,
        'friction': 4,
        'restitution':0.4
      };
      this.body = Bodies.rectangle(600,500,50, 50, options);
      this.width = 40;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      
  
      push();
      translate(pos.x, pos.y);
      
      strokeWeight(3);
      stroke('blue')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };