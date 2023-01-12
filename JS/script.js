const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.5

class Player{
    constructor(position){
        this.position = position
        this.velocity = {
            x:0,
            y:1
        }
        this.height = 100
    }

    //cria o player definindo os eixos gerado pelo constructor e o tamanho
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 100, this.height)
    }
//função que acrescenta +1px no eixo y
    update(){
        this.draw()
        this.position.y += this.velocity.y
        if (this.position.y + this.height + this.velocity.y < canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

const player = new Player({
    x:0,
    y:0,
})
const player2 = new Player({
    x:300,
    y:0,
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

    player.update()
    player2.update()
}

animate()

