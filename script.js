// make a hero that moves with player inputs
// make him able to shoot bullets
// randomly generate enemie across y axis at varying speeds

const game = document.getElementById('canvas')
let start = document.getElementById('start')
let ctx = game.getContext('2d')
let click = false
let hero;
let zombie;
let zombieInterval;
// let bullet;
let gameOver = true;
let zombies = []
let bullets = []

function pushZombies() {
    zombies.push(new Crawler (770, Math.floor(Math.random() * (600-70)),'blue', 30, 70))

}
//zombie shit
function addZombies() {
    zombies.forEach((zombie, i) => {
        //add collision detection
        zombieMoves(zombie)
        zombie.render()
        
        // zombies.push(new Crawler (770, Math.floor(Math.random() * 600),'blue', 30, 70))

    })
//  console.log('show zombie')
}
// make ZOMBIE move forward
function zombieMoves(zombie) {
    if (zombie.x > 0) {
        zombie.x -= 1;
    } else {
        console.log('gameover')
        gameOver = true
        zombie.clearRect
    }
}
// zombie end

function Crawler (x, y, color, width, height) {
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


function drawBullet() {
// X and Y position of bullet change to hero.x hero.y
// render bullet to screem
// update its position
// how to continously render and update the bullet
// add bullet when you press space
    bullets.forEach(bullet => {
        bullet.render()
        
        if (bullet.x < game.width) {
            bullet.x += 10
        } else {
            bullets.shift()
        }
    })
}

function gameLoop () {
    if (gameOver == false) {
        ctx.clearRect(0, 0, game.width, game.height)
        hero.render()
        // zombie.render()
        // bullet.render()
        addZombies()
        // console.log(bullets)
        drawBullet()
        window.requestAnimationFrame (gameLoop) 
    } 

}

// key button mapping for moving
function keyDownHandler(e) {
    e.preventDefault()
    // console.log(e.code)
    if (e.code === 'KeyW') {
        // console.log('W pressed')
        hero.y -= 10
    }
    if (e.code === 'KeyA') {
        // console.log('A pressed')
        hero.x -= 10
    }
    if (e.code === 'KeyS') {
        // console.log('S pressed')
        hero.y += 10 
    }
    if (e.code === 'KeyD') {
        // console.log('D pressed')
        hero.x += 10
    }
    if (e.code === 'Space') {
        // console.log('boom')
        // this adds 1 bullet to the bullets array
        bullets.push(new Crawler (hero.x, hero.y, 'purple', 10, 10))

    }
    if (e.code === 'KeyE') {
        zombies.push(new Crawler (770, Math.floor(Math.random() * 530),'blue', 30, 70))
        console.log('E pressed')
        console.log(zombies)
    } 
    if (hero.x > game.width - hero.width) {
        hero.x = game.width - hero.width
    }
    if (hero.x < 0) {
        hero.x = 0
    }
    if (hero.y > game.height - hero.height) {
        hero.y = game.height - hero.height
    }
    if (hero.y < 0) {
        hero.y = 0
    }
}
function bulletHit() {
    if(bullets.x + bullets.width > zombies.x && bullets.x < zombie.width + zombie.x)
}


document.addEventListener('DOMContentLoaded', ()=>{
    console.log('dom content loaded')  
    hero = new Crawler (50, 270 ,'red', 30, 70)
    // bullets = new Crawler (hero.x, hero.y, 'purple', 10, 10)
    // zombies.push(new Crawler (770, Math.floor(Math.random() * 600),'blue', 30, 70))
    // zombie = new Crawler (770, Math.floor(Math.random() * 600),'blue', 30, 70)
  
    // setInterval(addZombies, 3000)
    // this starts the game
    start.addEventListener('click', function (){
        gameOver = false
        gameLoop()
        zombieInterval = setInterval(pushZombies, 3000);
    })
    document.addEventListener('keydown', keyDownHandler)
    console.log(zombies)
    // heroMovement()
    // drawBullet()
})