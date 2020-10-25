import { Component, h, Host } from '@stencil/core';
export class MenuStx {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "menu-stx"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-stx.css"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-stx.css"]
    }; }
}
