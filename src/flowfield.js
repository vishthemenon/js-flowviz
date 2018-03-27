import Particle from './particle.js'

class FlowField {
  constructor(canvas) {
    this.c = canvas.getContext('2d')
    this.width = canvas.width
    this.height = canvas.height
    this.colCount = this.height/Particle.radius/2
    this.particles = []
    this.framecount = 0
    this.animate = this.animate.bind(this)
  }

  animate() {
    requestAnimationFrame(this.animate)
    this.c.clearRect(0,0,this.width,this.height)
    this.particles.map((p) => {
      this.updateParticlePosition(p)
      p.x>this.width || p.y>this.height ? this.removeParticle(p) : p.draw(this.c)
    })
    if(this.framecount%10 == 0) { this.addParticles() }
      this.framecount++
  }

  updateParticlePosition(p) {
    p.x += 5
  }

  removeParticle(p) {
    this.particles = this.particles.filter(item => item !== p) 
  }

  addParticles() {
    for(var i = 0; i < this.colCount; i+= 50+Particle.radius*2) {
      this.particles.push(new Particle(0,i*Particle.radius*2))
    }
  }
}

export default FlowField
