import Kiwi from "./kiwii.jpeg";
import './kiwi-img.scss';

export default class KiwiImg {
    render() {
        const img = document.createElement('img');
        img.width = 300;
        img.alt = 'altText';
        img.src = Kiwi;
        img.classList.add('kiwi-img');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}