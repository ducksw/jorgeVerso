document.getElementById('btn').setAttribute('onclick', 'call()')
document.getElementById('gen').setAttribute('onclick', 'generator()')
document.getElementById('copy').setAttribute('onclick', 'copiar()')
document.getElementById('btn-info').setAttribute('onclick', 'info()')

const txt = "43pgpvwinkK4HCxJvEH7Fs2KMkH1VBCVqRjyCVLfCwTrGD1NzGSHkmuDUyFqCjBiCPLYePT1StfQn1uZhkPJczzzFXjYZ1U";
var cont = 0;
let cn = 0


function ran() {
  let r = ""
  let c = 0;

  while (c < 30) {
    r += txt.charAt(Math.floor(Math.random() * txt.length));
    c += 1
  }
  return r
}

function call() {
  let inp = document.getElementById('input').value
  let result = document.getElementById('result').innerHTML 

  const image = [
    { name: "Jorgito tu Terror", src: "https://e.radio-grpp.io/normal/2022/03/25/074807_1237177.jpg" },
    { name: "Ricardo el Inmortal", src: "https://larepublica.cronosmedia.glr.pe/original/2022/01/18/61e73bca2b61d2649f3d40cb.jpg" },
    { name: "Gerardo", src: "https://imgmedia.larepublica.pe/640x640/larepublica/migration/images/SMDAWVNKANE3RBAJVZBHIIKU4U.webp" },
    { name: "El Cojo", src: "https://larepublica.cronosmedia.glr.pe/migration/images/MW3DA4AKQFCCHMRNEFGO42S3LQ.jpg" },
  ]

  if (inp != result || inp == "") {
    alert("GENERA UN CODIGO")
  } else {
    document.getElementById('result').innerHTML = "Cargando..."

    let pic = document.getElementById('image')

    setTimeout(function() {
      cn++

      if (cn >= 1) {
        let randName = Math.floor(Math.random() * image.length)
        let img = image[randName]

        pic.style.backgroundImage = `url(${img.src})`
        //pic.style.backgroundSize = "cover"
        //pic.style.transition = "all 3s"
        //pic.style.width = "300px"
        //pic.style.border = "1px dotted black"

        document.getElementById('result').innerHTML = "ERESSSS"
        document.getElementById('result2').innerHTML = img.name
        console.log(img)
      }
    }, 3000)
  }
  document.getElementById('input').value = ""
}

function generator() {
  var limit = setInterval(function() {
    cont++

    let random = ran(50)
    console.log(`###### Loops${cont} ######`)
    console.log(`======> ${random}`)
    document.getElementById('result').innerHTML = random

    if (cont >= 1) {
      clearInterval(limit)
    }
  }, 1000)

  document.getElementById('result').innerHTML = "Pending..."
}

function copiar() {
  let result = document.getElementById('result').innerHTML 
  navigator.clipboard.writeText(result)
}


var frcont = 0
function info() {
  let fr = document.getElementById('frame')
  let bd = document.getElementById('body')

  if (frcont < 1) {
    fr.style.display = "block";
    //bd.style.filter = "grayscale(100%)"
    frcont++
  } else {
    fr.style.display = "none";
    frcont--
  }

  console.log("a");
}
