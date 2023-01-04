import Kiwi from './components/kiwiimg/kiwii.jpeg';
import altText from './altText.txt';

function addImg() {
    const img = document.createElement('img');
    img.width = 300;
    img.alt = altText;
    img.src = Kiwi;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImg;