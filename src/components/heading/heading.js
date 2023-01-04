import './heading.scss'

class Heading {
    render(pageName) {
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Heading. this is' + pageName;
        h1.classList.add('heading_text');

        const body = document.querySelector('body');
        body.appendChild(h1);
    }
}

export default Heading;