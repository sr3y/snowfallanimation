class Snow{
    constructor(x, y){
        var options ={
            friction: 0.001,
            restitution: 0.1,
            gravity: 0.02,
            density: 0.5
        }
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.image = loadImage("snow4.webp")
        this.body = Bodies.circle(x, y, 20, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 20, 20);
    }
    updateY(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 800), y: random(0, 100)})
        }
    }
}