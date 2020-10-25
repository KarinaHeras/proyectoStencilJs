'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c036c3fc.js');

const fooTerCss = "li{text-decoration:none;color:rgb(62, 63, 65);padding:7px;margin:10px}footer{-ms-flex:1 1 auto;flex:1 1 auto}";

class FooTer {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null, index.h("footer", { class: "pv4 ph3 ph5-m ph6-l mid-gray" }, index.h("ul", null, index.h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.nombre), index.h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.copia), index.h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.derechos), index.h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.privado))))));
    }
}
FooTer.style = fooTerCss;

exports.foo_ter = FooTer;
