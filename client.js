document.getElementById('btn').setAttribute('onclick', 'call()')
document.getElementById('gen').setAttribute('onclick', 'generator()')

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
    'url("https://trome.com/resizer/W4dpVVVNySl638i0rD5gNwC2hes=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7WS6W3HNOJGDNAXWXUQSVNGJOM.jpg")',

    'url("https://elcomercio.pe/resizer/JeOgNY2VV2o7nxYTXceg0o3ThS8=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/I3Z72BKI2FATNH6FYMVYXUY6RU.jpg")',

    'url("https://elcomercio.pe/resizer/J4U3CH_FUwWuYnSi1BQbXVrBoIU=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WZCLIHHOYFGMFNLBHDORIJW3LU.jpg")'
  ];

  if (inp != result || inp == "") {
    console.log("ERROR")
  } else {
    document.getElementById('result').innerHTML = "ERES UNNNNNN..."

    setTimeout(function() {
      cn++
      if (cn >= 1) {

        const pic = document.querySelector('section');

        let randName = Math.floor(Math.random() * image.length)
        let img = image[randName];
        pic.style.backgroundImage = img 
        console.log(img)
        //document.getElementById('result').innerHTML = image[randName]
        
      }
    }, 3000)
  }
  document.getElementById('input').value = ""
}

function generator() {
  var limit = setInterval(function() {
    cont++

    let random = ran(50)
    //console.log(`###### Loops${cont} ######`)
    console.log(`======> ${random}`)
    document.getElementById('result').innerHTML = random

    if (cont >= 1) {
      clearInterval(limit)
    }
  }, 1000)
}

