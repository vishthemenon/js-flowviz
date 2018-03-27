class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, Particle.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  static get radius() {
    return 0.5;
  }
}

export default Particle;
