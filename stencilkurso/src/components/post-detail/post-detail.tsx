import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'post-detail',
  styleUrl: 'post-detail.css',
  shadow: true,
})
export class PostDetail {

  @Prop() titulo: string;
  @Prop() nickname: string;
  @Prop() comentario: string;
  @Prop() _id: string;

  render() {
    return (
    <Host>
      <div class="detail-post">
      <p class="detail-post-id">{this._id}</p>
        <h4 class="detail-post-Title">{this.titulo}</h4>
        <p class="post-cometario"> - {this.comentario}</p>
        <p class="detail-post-Author">{this.nickname}</p>


      </div>

    </Host>
    );
  }


}

