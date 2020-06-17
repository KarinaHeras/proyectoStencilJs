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
	<img src="img/karina.svg" class="img" alt="avatar">
	<h1>Karina Heras</h1>
	<h2>Madrid</h2>

	<nav class="db dt-l w-100 border-box ph5-l mt3">
			<a class="link dim gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
			<a class="link dim gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">Mys Post</a>
			<a class="link dim gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a>
			<a class="link dim gray f6 f5-l dib" href="#" title="Contact">Contact</a>
	</nav>
  </slot>
      </Host>
    );
  }

}
