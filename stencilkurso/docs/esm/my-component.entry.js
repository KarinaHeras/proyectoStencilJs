import { r as registerInstance, h } from './index-c9ee93b5.js';

function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}

const myComponentCss = ":host{display:block}";

class MyComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    getText() {
        return format(this.first, this.middle, this.last);
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.getText());
    }
}
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
