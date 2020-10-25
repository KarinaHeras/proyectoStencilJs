import { r as registerInstance, h } from './index-c9ee93b5.js';

const homePostCss = "body{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}";

class HomePost {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("main", null));
    }
}
HomePost.style = homePostCss;

export { HomePost as home_post };
