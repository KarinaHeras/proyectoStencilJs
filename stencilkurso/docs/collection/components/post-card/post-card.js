import { Component, Event, h, Prop } from '@stencil/core';
export class PostCard {
    llamarBoton() {
        this.boton.emit();
    }
    render() {
        return (h("main", null,
            h("header", null,
                h("slot", { name: "header" })),
            h("section", null,
                h("slot", { name: "section" }),
                h("article", { class: "card" },
                    h("p", { class: "card__excerpt" }, this._id),
                    h("h2", { class: "card__heading" }, this.titulo),
                    h("p", { class: "card__excerpt" },
                        this.contenido,
                        " "),
                    h("p", { class: "card__excerpt" },
                        this.nombre,
                        " "),
                    h("button", { class: "btn", onClick: () => this.llamarBoton() }, "Detalles")))));
    }
    static get is() { return "post-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["post-card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["post-card.css"]
    }; }
    static get properties() { return {
        "_id": {
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
            "attribute": "_id",
            "reflect": false
        },
        "titulo": {
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
            "attribute": "titulo",
            "reflect": false
        },
        "contenido": {
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
            "attribute": "contenido",
            "reflect": false
        },
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
