'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c036c3fc.js');

const postDetailCss = ":host{display:block}";

class PostDetail {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("div", { class: "detail-post" }, index.h("p", { class: "detail-post-id" }, this._id), index.h("h4", { class: "detail-post-Title" }, this.titulo), index.h("p", { class: "post-cometario" }, " - ", this.comentario), index.h("p", { class: "detail-post-Author" }, this.nickname))));
    }
}
PostDetail.style = postDetailCss;

exports.post_detail = PostDetail;
