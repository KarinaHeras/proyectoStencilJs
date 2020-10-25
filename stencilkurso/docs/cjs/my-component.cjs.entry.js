'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c036c3fc.js');

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

class MyComponent {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return index.h("div", null, "Hello, World! I'm ", this.getText());
    }
}
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
