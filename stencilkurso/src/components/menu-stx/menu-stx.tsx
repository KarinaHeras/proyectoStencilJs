import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'menu-stx',
  styleUrl: 'menu-stx.css',
  shadow: true,
})
export class MenuStx implements ComponentInterface {

  render() {
    return (
      <Host>
      <slot>

  </slot>
      </Host>
    );
  }

}
