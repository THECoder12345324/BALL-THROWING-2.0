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
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        ellipseMode(CENTER);
        fill("white");
        ellipse(pos.x, pos.y, this.width + 18);
    }
}