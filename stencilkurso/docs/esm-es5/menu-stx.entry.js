import { r as registerInstance, h, H as Host } from './index-c9ee93b5.js';
var menuStxCss = "body{font-family:\"Open Sans\", sans-serif}@media only screen and (min-width: 960px){.columns{-webkit-column-count:4;-moz-column-count:4;column-count:4;-webkit-column-width:25%;-moz-column-width:25%;column-width:25%}}@media only screen and (max-width: 768px){.columns{-webkit-column-count:2;-moz-column-count:2;column-count:2;-webkit-column-width:50%;-moz-column-width:50%;column-width:50%}}@media only screen and (max-width: 479px){.columns{-webkit-column-count:1;-moz-column-count:1;column-count:1;-webkit-column-width:100%;-moz-column-width:100%;column-width:100%}}";
var MenuStx = /** @class */ (function () {
    function MenuStx(hostRef) {
        registerInstance(this, hostRef);
    }
    MenuStx.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return MenuStx;
}());
MenuStx.style = menuStxCss;
export { MenuStx as menu_stx };
