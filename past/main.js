// var log = console.log.bind(console)
var loadLevel = function(n){
  n = n-1
  var level = levels[n]
  var blocks = []
  for (var i =0; i < level.length; i ++){
    p = level[i]
    var b = Block(p)
    // b.x = p[0]
    // b.y = p[1]
    blocks.push(b)
  }
  return blocks
}
var blocks = []
var enableDebugMode = function(enable){
  if(!enable) {
    return
  }
  window.paused = false
  window.addEventListener('keydown', function(event){
    var k = event.key
    if(k == 'p'){
      window.paused = ! window.paused
    }else if('1234567'.includes(k)){
      blocks = loadLevel(Number(k))
    }
  })
  // controler
  document.querySelector('#id-input-speed').addEventListener('input', function(event){
    var input = event.target
    // log(event, input.value)
    window.fps = Number(input.value)
  })
}
var __mian = function(){
  enableDebugMode(true)

  var score = 0
  var game = GuaGame(40)
  var paddle = Paddle()
  var ball = Ball()

  game.registerAction('a', function(){
    paddle.moveLeft()
  })
  game.registerAction('d', function(){
    paddle.moveRight()
  })
  game.registerAction('f', function(){
    ball.fire()
  })

  game.update = function(){
    if(window.paused){
      return
    }
    ball.move()
    if(paddle.collide(ball)){
      ball.speedY *= -1
    }
    for (var i =0; i < blocks.length; i++){
      var block = blocks[i]
      if(block.collide(ball)){
        log('相撞')
        ball.speedY *= -1
        block.kill()
        // update score
        score += 10
      }
  }
  }
  game.draw = function(){
    game.context.drawImage(paddle.image, paddle.x, paddle.y, paddle.w, paddle.h)
    game.context.drawImage(ball.image, ball.x, ball.y, ball.w, ball.h)
    for (var i =0; i < blocks.length; i++){
      var block = blocks[i]
      if(block.alive){
        game.context.drawImage(block.image, block.x, block.y,block.w, block.h)
      }
    }

    game.context.fillText('分数:'+ score, 10,290)

  }
}

__mian()
