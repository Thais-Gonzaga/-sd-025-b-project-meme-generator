const conteiner = document.createElement('div');
conteiner.id = 'meme-image-container';
document.body.appendChild(conteiner);

const input = document.createElement('input');
input.id = 'text-input';
input.type = 'text';
conteiner.appendChild(input);

const p = document.createElement('p');
p.id = 'meme-text';
conteiner.appendChild(p);

function textInMeme() {
  p.innerText = input.value;
}
input.addEventListener('input', textInMeme);
