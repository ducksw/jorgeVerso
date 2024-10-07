import { image } from './images.js'

function random_image() {
  let res = document.getElementById('res')
  let res2 = document.getElementById('res2')
  let box_image = document.getElementById('box-image')
  let box = document.getElementById('box')

  let random1 = Math.floor(Math.random() * image.length)
  let random2 = Math.floor(Math.random() * image.length)

  while (random2 === random1) {
    random2 = Math.floor(Math.random() * image.length)
  }

  let img1 = image[random1]
  let img2 = image[random2]

  res.innerHTML = img1.name
  res2.innerHTML = img2.name
  box_image.src = img1.src
  box.src = img2.src
}
random_image()

function clicked_image(click) {
  let otra_image 
  if (click.id === 'box-image') {
    otra_image = document.getElementById('box')
  } else {
    otra_image = document.getElementById('box-image')
  }

  let indexx = parseInt(otra_image.dataset.index)
  let newImage = Math.floor(Math.random() * image.length)

  if (newImage === indexx) {
    newImage = Math.floor(Math.random() * image.length)
  }

  otra_image.src = image[newImage].src
  otra_image.dataset.index = newImage

  let box_image_index = parseInt(document.getElementById('box-image').dataset.index)
  let box_index = parseInt(document.getElementById('box').dataset.index)
  
  let res = document.getElementById('res');
  let res2 = document.getElementById('res2');
  res.innerHTML = image[box_image_index].name
  res2.innerHTML = image[box_index].name
  document.getElementById('box-image').name =  image[0].name;
  document.getElementById('box').name = image[1].name;

}

function data_index() {
  document.getElementById('box-image').dataset.index = 11
  document.getElementById('box').dataset.index = 9

  document.getElementById('box-image').src = image[11].src;
  document.getElementById('box').src = image[9].src;

  let res = document.getElementById('res');
  let res2 = document.getElementById('res2');
  res.innerHTML = image[11].name
  res2.innerHTML = image[9].name
}
data_index()

document.getElementById('box-image').addEventListener('click', function() {
  clicked_image(this);
});

document.getElementById('box').addEventListener('click', function() {
  clicked_image(this);
});
