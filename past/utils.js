var e = sel => document.querySelector(sel)
var log = function(s){
  e('#id-text-log').value += '\n' + s
}

var imageFromPath = function(path){
  var img = new Image()
  img.src = path
  return img
}

var rectIntersects = function(a, b) {
  var o = a
  if(b.y > o.y  && b.y < o.y + o.h){
    if(b.x > o.x && b.x < o.x + o.w){
      return true
    }
  }
  return false
}