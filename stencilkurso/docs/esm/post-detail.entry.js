import { r as registerInstance, h, H as Host } from './index-c9ee93b5.js';

const postDetailCss = ":host{display:block}";

class PostDetail {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("div", { class: "detail-post" }, h("p", { class: "detail-post-id" }, this._id), h("h4", { class: "detail-post-Title" }, this.titulo), h("p", { class: "post-cometario" }, " - ", this.comentario), h("p", { class: "detail-post-Author" }, this.nickname))));
    }
}
PostDetail.style = postDetailCss;

export { PostDetail as post_detail };
