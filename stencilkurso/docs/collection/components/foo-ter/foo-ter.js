import { Component, h, Host, Prop } from '@stencil/core';
export class FooTer {
    render() {
        return (h(Host, null,
            h("slot", null,
                h("footer", { class: "pv4 ph3 ph5-m ph6-l mid-gray" },
                    h("ul", null,
                        h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.nombre),
                        h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.copia),
                        h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.derechos),
                        h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.privado))))));
    }
    static get is() { return "foo-ter"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["foo-ter.css"]
    }; }
    static get styleUrls() { return {
        "$": ["foo-ter.css"]
    }; }
    static get properties() { return {
        "nombre": {
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
            "attribute": "nombre",
            "reflect": false
        },
        "copia": {
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
            "attribute": "copia",
            "reflect": false
        },
        "derechos": {
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
            "attribute": "derechos",
            "reflect": false
        },
        "privado": {
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
            "attribute": "privado",
            "reflect": false
        }
    }; }
}
