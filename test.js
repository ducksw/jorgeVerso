function token(l) {
  let save = ""; 
  let token = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let tokenLength = token.length;

  for (let i = 0; i < l; i++) {
    save += token.charAt(Math.random() * tokenLength);
  }
  return save;
}

var c = 0;
let temp = setInterval(function() {
  c++
  var arr = []
  var t = token(40)
  arr.push(t);

  //console.log("#TOKEN")
  console.log("===>", c, arr)


  if (c >= 6) {
    clearInterval(temp)
  }
}, 1000)
