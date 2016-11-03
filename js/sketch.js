var bubbles = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for(var i = 0; i < 150; i ++){

    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      draw: function(){
        stroke(random(255), 0, random(255));
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 25, 25);
      },
      move: function(){
        this.x += random(-1, 1);
        this.y += random(-1, 1);
      }
    }
  }
}

function draw() {
  background: (0);

  for(var i = 0; i < bubbles.length; i ++){
  bubbles[i].draw();
  bubbles[i].move();

  }
}
