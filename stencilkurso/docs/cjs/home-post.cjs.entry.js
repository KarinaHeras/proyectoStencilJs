'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c036c3fc.js');

const homePostCss = "body{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}";

class HomePost {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("main", null));
    }
}
HomePost.style = homePostCss;

exports.home_post = HomePost;
