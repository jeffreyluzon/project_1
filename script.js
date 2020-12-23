// make a hero that moves with player inputs
// make him able to shoot bullets
// randomly generate enemie across y axis at varying speeds

const game = document.getElementById('canvas')

let ctx = game.getContext('2d')
game.setAttribute('height', '400px')
game.setAttribute('width', '400px')


ctx.fillStyle = 'white'

ctx.strokeStyle = 'red'

ctx.lineWidth = 10

ctx.fillRect(10, 10, 100, 100);
ctx.strokeRect(10, 10, 100, 100);

function drawBullet() {
ctx.fillStyle = 'purple'

ctx.strokeStyle = 'green'

ctx.lineWidth = 10

ctx.fillRect(30, 15, 20, 20)
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom content loaded')  
    drawBullet()
    
})