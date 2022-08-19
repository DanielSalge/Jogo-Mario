const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')

    }, 500)

}

const loop = setInterval(() => {

    console.log('loop');

    const cloudsPosition = clouds.offsetLeft
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    console.log(marioPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './images/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        clearInterval(interval)
        clearInterval(loop)
        

    } 

    

}, 10)

document.addEventListener('keydown', jump)

let interval = null
let playerScore = 0

let scoreCounter = () => {
    playerScore++
    score.innerHTML = `Score: <b>${playerScore}</b>`
}

interval = setInterval(scoreCounter, 200)