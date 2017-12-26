var Paddle = function(){
  var image = imageFromPath('cloud.png')
  var o = {
    image: image,
    w: 100,
    h: 20,
    x: 150,
    y: 280,
    speed: 10,
  }
  o.moveLeft = function(){
    o.x -= o.speed
    if(o.x < 0){
      o.x = 0
      // log('left out')
    }
  }
  o.moveRight = function(){
    o.x += o.speed
    if(o.x > 400 - o.w){
      o.x = 400 - o.w
      // log('right out')
    }
  }
  o.collide = function(b){
      return (rectIntersects(o,b) || rectIntersects(b, o))
  }
  return o
}
