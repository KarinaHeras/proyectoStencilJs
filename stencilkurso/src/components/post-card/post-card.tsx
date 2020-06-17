import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'post-card',
  styleUrl: 'post-card.css',
  shadow: true,
})
export class PostCard implements ComponentInterface {

  @Prop() titulo: string;
  @Prop() content: string;


  render() {
    return (
<Host>

  <div class="post">

    <p>{this.titulo}</p>
    <p>{this.content}</p>
    {/* <ion-avatar item-left>
            <img src="https://source.unsplash.com/category/people/100x100">
          </ion-avatar> */}
    </div>
    </Host>

    );
  }

}
