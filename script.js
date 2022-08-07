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

function textInMeme() {
  p.innerText = input.value;
}
input.addEventListener('input', textInMeme);

function readFile() {
  const img = document.getElementById('meme-image');
  const memeInsert = document.getElementById('meme-insert');
  const fileReader = new FileReader();
  console.log(fileReader);
  fileReader.onloadend = function change() {
    img.src = fileReader.result;
  };
  fileReader.readAsDataURL(memeInsert.files[0]);
}
inputFile.addEventListener('change', readFile);
