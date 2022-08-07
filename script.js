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

function textInMeme() {
  p.innerText = input.value;
}
input.addEventListener('input', textInMeme);

function readFile() {
  const img = document.getElementById('meme-image');
  const memeInsert = document.getElementById('meme-insert');
  const fileReader = new FileReader();
  fileReader.onloadend = function change() {
    img.src = fileReader.result;
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

function chargeBorderRed() {
  conteiner.style.border = '3px dashed rgb(255, 0, 0)';
}
buttonRed.addEventListener('click', chargeBorderRed);

function chargeBorderBlue() {
  conteiner.style.border = '5px double rgb(0, 0, 255)';
}
buttonBlue.addEventListener('click', chargeBorderBlue);

function chargeBorderGreen() {
  conteiner.style.border = '6px groove rgb(0, 128, 0)';
}
buttonGreen.addEventListener('click', chargeBorderGreen);
