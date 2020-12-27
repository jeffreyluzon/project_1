// make a hero that moves with player inputs
// make him able to shoot bullets
// randomly generate enemie across y axis at varying speeds

const game = document.getElementById('canvas')
let ctx = game.getContext('2d')
let hero;
// let hero = {
//     x: 200,
//     y: 200,
//     width: 30,
//     height: 70,
//     render() {
    
//     }
 
// } 
function Hero (x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.height = height
    this.width = width
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.strokeRect(this.x, this.y, this.width, this.height);
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


// function drawBullet() {
//     ctx.fillStyle = 'purple'

//     ctx.strokeStyle = 'green'

//     ctx.lineWidth = 10

//     ctx.fillRect(30, 15, 10, 10)
// }
function gameLoop () {
    ctx.clearRect(0, 0, game.width, game.height)
    hero.render()
    window.requestAnimationFrame (gameLoop) 
}

function keyDownHandler(e) {
    console.log(e.code)
    if (e.code === 'KeyW') {
        console.log('W pressed')
        hero.y -= 10
    }
    if (e.code === 'KeyA') {
        console.log('A pressed')
        hero.x -= 10
    }
    if (e.code === 'KeyS') {
        console.log('S pressed')
        hero.y += 10
    }
    if (e.code === 'KeyD') {
        console.log('D pressed')
        hero.x += 10
    }
}



document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom content loaded')  
    hero = new Hero (50, 50 ,'red', 100, 100)
    gameLoop()
    document.addEventListener('keydown', keyDownHandler)
    // heroMovement()
    // drawBullet()
    
})