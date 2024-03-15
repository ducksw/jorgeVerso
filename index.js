document.getElementById('btn').setAttribute('onclick', 'call()')
document.getElementById('gen').setAttribute('onclick', 'generator()')
document.getElementById('copy').setAttribute('onclick', 'copiar()')
//document.getElementById('btn-info').setAttribute('onclick', 'info()')
//document.getElementById('imageup').setAttribute('onclick', 'upLink()')
//document.getElementById('deleteImage').setAttribute('onclick', 'deleArr()')
var subida = document.getElementById('subida')

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

// Personajes DEFAULT
let image = [
  { 
    name: "Coronel Jorgito",
    src: "img/Coronel_Jorgito.png",
  },
  { 
    name: "Jorgito Abogado",
    src: "img/Jorgito_Abogado.png",
  },
  { 
    name: "Jorgito Basurero",
    src: "img/Jorgito_Basurero.png",
  },
  { 
    name: "Jorgito Cevichero",
    src: "img/Jorgito_Cevichero.png",
  },
  { 
    name: "Jorgito Emolientero",
    src: "img/Jorgito_Emolientero.png",
  },
  { 
    name: "Jorgito Senati",
    src: "img/Jorgito_Senati.png",
  },
  { 
    name: "Jorgito Cobrador de Combi",
    src: "img/Jorgito_cobrador_de_combi.png",
  },
  { 
    name: "Jorgito Vendedor de Huevitos de Codorniz",
    src: "img/Jorgito_vendedor_de_huevitos_de_codorniz.png",
  },
  { 
    name: "Jorgito Emo",
    src: "img/jorge-emo.png",
  },
  { 
    name: "Jorgito Chamo",
    src: "img/jorge_chamo.png",
  },
  { 
    name: "Jorgito Mario Brown",
    src: "img/jorge_mario.png",
  },
  { 
    name: "Jorgito Vendedor de Periodicos",
    src: "img/jorge_vendedor.png",
  },
  { 
    name: "Jorgito Cevichero",
    src: "img/Jorgito_Cevichero.png",
  },
  { 
    name: "Jorgito y Kuking",
    src: "img/jorge_y_Kuking.png",
  },
  { 
    name: "Jorgito Albañil",
    src: "img/jorgito_albanil.png",
  },
]

function call() {
  let inp = document.getElementById('input').value
  let result = document.getElementById('result').innerHTML 

   if (inp != result || inp == "") {
    alert("GENERA UN CODIGO")
  } else {
    document.getElementById('result').innerHTML = "Cargando..."

    if (image == "") {
      document.getElementById('result').innerHTML = "No hay imagenes"
    }

    let pic = document.getElementById('image')

    setTimeout(function() {
      cn++
      if (cn >= 1) {
        let randName = Math.floor(Math.random() * image.length)
        let img = image[randName]

        pic.style.backgroundImage = `url(${img.src})`
        pic.style.boxShadow = "0px 0px 20px black"
        //pic.style.backgroundSize = "cover"
        //pic.style.transition = "all 3s"
        //pic.style.width = "300px,
        //pic.style.border = "1px dotted black"

        document.getElementById('result').innerHTML = "Eres"
        document.getElementById('result2').innerHTML = img.name
        document.getElementById('result2').style.border = "1px solid black"
        //document.getElementById('result2').style.background = "linear-gradient(90deg, rgba(56,56,16,1) 0%, rgba(224,224,68,1) 100%)"

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


/*
function upArchive() {
  let archivo = document.getElementById("file").files[0];
  let rd = new FileReader();

  if (file) {
    let nm = prompt("Coloca el nombre del personaje")
    rd.readAsDataURL(archivo );
    rd.onloadend = function () {
    setTimeout(function() {
      subida.innerHTML = "Cargando Imagen.."

      let lin = setInterval(function() {
        for (let i = 0; i < 1; i++) {
          subida.innerHTML = "Imagen Cargada";
        }
        image.push({name: nm, src: rd.result})

        while (lcont >= 1) {
          clearInterval(lin);
        }

      }, 4000)
    }, 100)

    subida.innerHTML = ""
    }

    console.log(image)
  }
}

var lcont = 0
function upLink() {
  let URL = prompt("Coloca el URL")
  let nm = prompt("Coloca el nombre del personaje")

  if (nm == "" || nm == null) {
    alert("Complete todos los campos")
  } else if (URL == "" || URL == null) {
    alert("Complete todos los campos")
  } else {
    setTimeout(function() {
      subida.innerHTML = "Cargando Imagen.."

      let lin = setInterval(function() {
        for (let i = 0; i < 1; i++) {
          subida.innerHTML = "Imagen Cargada";
        }
        image.push({name: nm, src: URL})

        while (lcont >= 1) {
          clearInterval(lin);
        }

      }, 4000)
    }, 100)
    subida.innerHTML = ""
  }

  console.log(image)
}

function deleArr() {
  if (image == "") {
    document.getElementById('result').innerHTML = "No hay imagenes cargadas"
  } else {
    image = []
    console.log(image, "imagens eliminadas")
  }

  if (image == "") {
    document.getElementById('result').innerHTML = "Imagenes eliminada"
  }
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
*/
