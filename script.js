const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const img4 = document.querySelector('#img4');
const nome1 = document.querySelector('#nome1');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');
const nome4 = document.querySelector('#nome4');

gerarPersonagemAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

getCharacter = async (img, nome) => {
    let numeroAleatorio = gerarPersonagemAleatorio();
    const response = await fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`);
    const data = await response.json();

        img.src = data.image;
        nome.innerHTML = data.name;
 }
    
    refresh = () => {
    getCharacter(img, nome);
}

getCharacter(img1, nome1);
getCharacter(img2, nome2);
getCharacter(img3, nome3);
getCharacter(img4, nome4);

