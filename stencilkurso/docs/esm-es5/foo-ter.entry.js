import { r as registerInstance, h, H as Host } from './index-c9ee93b5.js';
var fooTerCss = "li{text-decoration:none;color:rgb(62, 63, 65);padding:7px;margin:10px}footer{-ms-flex:1 1 auto;flex:1 1 auto}";
var FooTer = /** @class */ (function () {
    function FooTer(hostRef) {
        registerInstance(this, hostRef);
    }
    FooTer.prototype.render = function () {
        return (h(Host, null, h("slot", null, h("footer", { class: "pv4 ph3 ph5-m ph6-l mid-gray" }, h("ul", null, h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.nombre), h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.copia), h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.derechos), h("li", { class: "f6 dib ph2 link mid-gray dim" }, this.privado))))));
    };
    return FooTer;
}());
FooTer.style = fooTerCss;
export { FooTer as foo_ter };
