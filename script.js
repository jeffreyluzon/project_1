// make a hero that moves with player inputs
// make him able to shoot bullets
// randomly generate enemie across y axis at varying speeds

const game = document.getElementById('canvas')
let ctx = game.getContext('2d')
let hero = {
    x: 200,
    y: 200,
    width: 30,
    height: 70,
    render() {

    }
 
} 



game.setAttribute('height', '600px')
game.setAttribute('width', '800px')

function heroMovement () {

    ctx.fillStyle = 'white'

    ctx.strokeStyle = 'red'

    ctx.lineWidth = 1

    ctx.fillRect(10, 10, 30, 70);
    ctx.strokeRect(10, 10, 30, 70);
}


function drawBullet() {
    ctx.fillStyle = 'purple'

    ctx.strokeStyle = 'green'

    ctx.lineWidth = 10

    ctx.fillRect(30, 15, 10, 10)
}

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom content loaded')  
    hero()
    drawBullet()
    
})