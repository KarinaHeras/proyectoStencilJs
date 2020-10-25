import { Component, h } from '@stencil/core';
export class HomePost {
    render() {
        return (h("main", null));
    }
    static get is() { return "home-post"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["home-post.css"]
    }; }
    static get styleUrls() { return {
        "$": ["home-post.css"]
    }; }
}
