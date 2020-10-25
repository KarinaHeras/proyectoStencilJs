'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c036c3fc.js');

const buttonPostCss = "";

class ButtonPost {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.boton = index.createEvent(this, "boton", 7);
    }
    llamarBoton() {
        this.boton.emit();
    }
    render() {
        return (index.h("button", null, index.h("button", { class: "btn", onClick: () => this.llamarBoton() })));
    }
}
ButtonPost.style = buttonPostCss;

exports.button_post = ButtonPost;
