import { r as registerInstance, c as createEvent, h } from './index-c9ee93b5.js';
var buttonPostCss = "";
var ButtonPost = /** @class */ (function () {
    function ButtonPost(hostRef) {
        registerInstance(this, hostRef);
        this.boton = createEvent(this, "boton", 7);
    }
    ButtonPost.prototype.llamarBoton = function () {
        this.boton.emit();
    };
    ButtonPost.prototype.render = function () {
        var _this = this;
        return (h("button", null, h("button", { class: "btn", onClick: function () { return _this.llamarBoton(); } })));
    };
    return ButtonPost;
}());
ButtonPost.style = buttonPostCss;
export { ButtonPost as button_post };
