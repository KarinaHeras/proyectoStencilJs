import { r as registerInstance, h } from './index-c9ee93b5.js';
var homePostCss = "body{-webkit-box-sizing:border-box;box-sizing:border-box}:host{display:block}";
var HomePost = /** @class */ (function () {
    function HomePost(hostRef) {
        registerInstance(this, hostRef);
    }
    HomePost.prototype.render = function () {
        return (h("main", null));
    };
    return HomePost;
}());
HomePost.style = homePostCss;
export { HomePost as home_post };
