const input = document.createElement('input');
input.id = 'text-input';
input.type = 'text';
input.placeholder = 'Escreva aqui';
input.maxLength = 60;
document.body.appendChild(input);
const conteiner = document.createElement('div');
conteiner.id = 'meme-image-container';
document.body.appendChild(conteiner);

const inputFile = document.createElement('input');
inputFile.type = 'file';
inputFile.id = 'meme-insert';
document.body.appendChild(inputFile);

const p = document.createElement('div');
p.id = 'meme-text';
conteiner.appendChild(p);

const image = document.createElement('img');
image.id = 'meme-image';
conteiner.appendChild(image);

const divButton = document.createElement('div');
document.body.appendChild(divButton);

const divOption = document.createElement('div');
document.body.appendChild(divOption);

function textInMeme() {
  p.innerText = input.value;
}
input.addEventListener('input', textInMeme);

function readFile() {
  const memeInsert = document.getElementById('meme-insert');
  const fileReader = new FileReader();
  fileReader.onloadend = function change() {
    image.src = fileReader.result;
  };
  fileReader.readAsDataURL(memeInsert.files[0]);
}
inputFile.addEventListener('change', readFile);

function createButton(id, text) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = text;
  divButton.appendChild(button);
  return button;
}
const buttonRed = createButton('fire', 'Red');
buttonRed.style.background = 'rgb(255, 0, 0)';
const buttonBlue = createButton('water', 'Blue');
buttonBlue.style.background = 'rgb(0, 0, 255)';
const buttonGreen = createButton('earth', 'Green');
buttonGreen.style.background = 'rgb(0, 128, 0)';

function changeBorderRed() {
  conteiner.style.border = '3px dashed rgb(255, 0, 0)';
}
buttonRed.addEventListener('click', changeBorderRed);

function changeBorderBlue() {
  conteiner.style.border = '5px double rgb(0, 0, 255)';
}
buttonBlue.addEventListener('click', changeBorderBlue);

function changeBorderGreen() {
  conteiner.style.border = '6px groove rgb(0, 128, 0)';
}
buttonGreen.addEventListener('click', changeBorderGreen);

function changeMemes(event) {
  image.src = event.target.src;
}

function createImg(id, file) {
  const img = document.createElement('img');
  img.id = id;
  img.src = file;
  img.classList = 'memes';
  divOption.appendChild(img);
  img.addEventListener('click', changeMemes);
  return img;
}
createImg('meme-1', '/imgs/meme1.png');
createImg('meme-2', '/imgs/meme2.png');
createImg('meme-3', '/imgs/meme3.png');
createImg('meme-4', '/imgs/meme4.png');
