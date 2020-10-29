class Paper{
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.width = r;
        this.body = Matter.Bodies.circle(x, y, r, options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        /*ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.width + 18);*/
        imageMode(CENTER);
        push();
        tint(255, 255, 255);
        image(this.image, pos.x, pos.y, this.width * 2.7, this.width * 2.7);
        pop();
    }
}