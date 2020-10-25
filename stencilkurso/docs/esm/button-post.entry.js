import { r as registerInstance, c as createEvent, h } from './index-c9ee93b5.js';

const buttonPostCss = "";

class ButtonPost {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.boton = createEvent(this, "boton", 7);
    }
    llamarBoton() {
        this.boton.emit();
    }
    render() {
        return (h("button", null, h("button", { class: "btn", onClick: () => this.llamarBoton() })));
    }
}
ButtonPost.style = buttonPostCss;

export { ButtonPost as button_post };
