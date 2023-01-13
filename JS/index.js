const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4
}


const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36) {
    floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}

const collisionBlock = []
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 1729) {
            console.log('draw a collisions')
            collisionBlock.push(new CollisionBlock({
                position: {
                    x: x * 16,
                    y: y * 16,
                }
            }))

        }
    })
})

console.log(collisionBlock)

const gravity = 0.5



const player = new Player({
    x: 0,
    y: 0,
})
const player2 = new Player({
    x: 300,
    y: 0,
})


//atribuindo valores boleano à constante keys para dise ser determinado botão foi pressionado ou não
const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: '../img/background.png',
})

/* let y = 100
let y2 = 100 */

//função de animação que retorna a propria função de animação
function animate() {
    //esse metodo faz o retorno
    window.requestAnimationFrame(animate)
    //colorindo o canvas em branco
    c.fillStyle = 'white'
    //criando espaçamento 0 nos eixos x e y e recebendo  width e height dos valores atribuidos antes
    c.fillRect(0, 0, canvas.width, canvas.height)

    c.save()//
    c.scale(1,1) //altera as dimensões da imagem 
    c.translate(0, -background.image.height + scaledCanvas.height)//
    background.update()
    collisionBlock.forEach((collisionBlock) =>{
        collisionBlock.update()
    })
    c.restore()//



    player.update()
    player2.update()

    player.velocity.x = 0

    //se o botão 'd' estiver sendo pressionado então atribuir à variavel x da função velocidade +1 px 
    //se não é subitraído -1 a cada frame
    if (keys.d.pressed) player.velocity.x = 1
    else if (keys.a.pressed) player.velocity.x = -1
}

animate()

//metodo de controle usando switch case 
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'w':
            player.velocity.y = -5
            break
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break

    }
})
