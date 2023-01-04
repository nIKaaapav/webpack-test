import './hello-world-button.scss';

class HelloWorldButton {
    buttonCssClass = 'hello_world_button';

    render() {
        const button = document.createElement('button');
        button.innerHTML = 'Hello';
        button.classList.add(this.buttonCssClass);
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'hi';
            p.classList.add('hello_world_text')

            body.appendChild(p);
        }
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default HelloWorldButton;