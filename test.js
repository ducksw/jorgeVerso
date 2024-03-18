var a = "I";
var b = "";
var c = 0;

for (let i = 0; i < 10; i++) {
  let fin = setInterval(function() {
    c++
    b += a
    console.log(b);

    while (c >= 10) {
      clearInterval(fin)
    }
  }, 100)
}
