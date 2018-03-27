import Particle from './particle.js'
import FlowField from './flowfield.js'

let width = window.innerWidth
let height = window.innerHeight

var canvas = document.querySelector('#main')
canvas.width = width
canvas.height = height

let f = new FlowField(canvas)
f.animate()
