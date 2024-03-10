document.getElementById('btn').setAttribute('onclick', 'call()')
document.getElementById('gen').setAttribute('onclick', 'generator()')
document.getElementById('copy').setAttribute('onclick', 'copiar()')
document.getElementById('btn-info').setAttribute('onclick', 'info()')
document.getElementById('imageup').setAttribute('onclick', 'upLink()')

const txt = "43pgpvwin8479kK4HCxJvEH7Fs2KMkH1VBCVqRjyCVLfCwTrGD1NzGSH59864kmuDUyFqCjBiCPLYePT1StfQn1u015384ZhkPJczzzFXjYZ1U";
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
  }, 2500)

  document.getElementById('result').innerHTML = "Pending..."
}
// ### Personajes DEFAULT ###
let image = [
  { 
    name: "Jorgito tu Terror",
    src: "https://e.radio-grpp.io/normal/2022/03/25/074807_1237177.jpg" 
  },
  {
    name: "Ricardo el Inmortal",
    src: "https://larepublica.cronosmedia.glr.pe/original/2022/01/18/61e73bca2b61d2649f3d40cb.jpg"
  },
  {
    name: "Gerardo",
    src: "https://imgmedia.larepublica.pe/640x640/larepublica/migration/images/SMDAWVNKANE3RBAJVZBHIIKU4U.webp"
  },
  { name: "El Cojo",
    src: "https://larepublica.cronosmedia.glr.pe/migration/images/MW3DA4AKQFCCHMRNEFGO42S3LQ.jpg"
  },
  {
    name: "Dayanita",
    src: "https://e.rpp-noticias.io/xlarge/2023/04/27/022602_1420807.jpg"
  },
  {
    name: "Chupetin Trujillo",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQQHYufIQ03fYC0Y5e-Q9uLvFXcnGxayTW-9X6iPMTGw&s"
  },
  {
    name: "Cristian Dominguez",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr8pKW0mSbvroLzw4mlnGkcH98QjRKrsP4I3HYqtCHow&s"
  },
  {
    name: "El carro de Cristian Dominguez",
    src: "https://i0.wp.com/informateperu.pe/wp-content/uploads/2024/01/image-73.png?resize=1200%2C675&ssl=1",
  },
]

function call() {
  let inp = document.getElementById('input').value
  let result = document.getElementById('result').innerHTML 

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
        //pic.style.width = "300px,
        //pic.style.border = "1px dotted black"

        document.getElementById('result').innerHTML = "Eres"
        document.getElementById('result2').innerHTML = img.name
        console.log(img)
      }
    }, 3000)
  }
  document.getElementById('input').value = ""
}

// LLAMAR LA FUNCION AL DAR ENTER
document.getElementById('input').addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    call();
  }
});

function copiar() {
  let result = document.getElementById('result').innerHTML 
  navigator.clipboard.writeText(result)
}

function upArchive() {
  let archivo = document.getElementById("file").files[0];
  let rd = new FileReader();

  if (file) {
    let nm = prompt("Coloca del personaje")
    rd.readAsDataURL(archivo );
    rd.onloadend = function () {
      //document.getElementById("img").src = reader.result;
      image.push({name: nm, src: rd.result})
    }
    console.log(image)
  }
}

function upLink() {
  let nm = prompt("Coloca del personaje")
  let URL = prompt("Coloca el URL")

  if (nm == ""|| URL == "") {
    alert("Complete todos los campos")
  } else {
    image.push({name: nm, src: URL})
  }
  console.log(image)
}

var frcont = 0
function info() {
  let fr = document.getElementById('frame')

  if (frcont < 1) {
    fr.style.display = "block";
    //bd.style.filter = "grayscale(100%)"
    frcont++
  } else {
    fr.style.display = "none";
    frcont--
  }
}
