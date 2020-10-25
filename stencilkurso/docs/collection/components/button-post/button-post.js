import { Component, Event, h, Prop } from '@stencil/core';
export class ButtonPost {
    llamarBoton() {
        this.boton.emit();
    }
    render() {
        return (h("button", null,
            h("button", { class: "btn", onClick: () => this.llamarBoton() })));
    }
    static get is() { return "button-post"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button-post.css"]
    }; }
    static get styleUrls() { return {
        "$": ["button-post.css"]
    }; }
    static get properties() { return {
        "detalles": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "detalles",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "boton",
            "name": "boton",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
