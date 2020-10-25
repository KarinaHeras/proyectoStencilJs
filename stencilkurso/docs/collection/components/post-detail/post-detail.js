import { Component, h, Host, Prop } from '@stencil/core';
export class PostDetail {
    render() {
        return (h(Host, null,
            h("div", { class: "detail-post" },
                h("p", { class: "detail-post-id" }, this._id),
                h("h4", { class: "detail-post-Title" }, this.titulo),
                h("p", { class: "post-cometario" },
                    " - ",
                    this.comentario),
                h("p", { class: "detail-post-Author" }, this.nickname))));
    }
    static get is() { return "post-detail"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["post-detail.css"]
    }; }
    static get styleUrls() { return {
        "$": ["post-detail.css"]
    }; }
    static get properties() { return {
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
        "nickname": {
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
            "attribute": "nickname",
            "reflect": false
        },
        "comentario": {
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
            "attribute": "comentario",
            "reflect": false
        },
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
        }
    }; }
}
