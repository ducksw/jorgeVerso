function token(l) {
  let save = ""; 
  let token = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let tokenLength = token.length;

  for (let i = 0; i < l; i++) {
    save += token.charAt(Math.random() * tokenLength);
  }
  return save;
}

var t = token(40)

console.log("## TOKEN ##")
console.log(t);
//console.log(`---> ${t}`)

