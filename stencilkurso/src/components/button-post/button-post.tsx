import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-post',
  styleUrl: 'button-post.css',
  shadow: true,
})
export class ButtonPost implements ComponentInterface {

  @Prop() text: string;

  render() {
    return (
      <div>
        <button>{this.text}

        </button>
        </div>
    );
  }

}
