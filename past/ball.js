var Ball = function(){
  var image = imageFromPath('ball.png')
  var o = {
    image: image,
    w: 20,
    h: 20,
    x: 190,
    y: 260,
    speedX: 5,
    speedY: 5,
    fired: false,
  }
  o.fire = function(){
    o.fired = true
  }
  o.move = function(){
    if(o.fired){
      // log('move')
      if(o.x < 0 || o.x > 400- o.w){
        o.speedX = -o.speedX
      }
      if(o.y < 0 ){
        o.speedY = -o.speedY
      }
      if(o.y > 400 - o.h){
        log('失败' )
      }
      //move
      o.x += o.speedX
      o.y += o.speedY
    }
  }
  return o
}
