import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'foo-ter',
  styleUrl: 'foo-ter.css',
  shadow: true,
})
export class FooTer implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot>
          <div class="pv4 ph3 ph5-m ph6-l mid-gray">
	<small class="f6 db tc">© 2020 <b class="ttu">Karina Heras</b>Derechos reservados.</small>
		<a href="/privacy/" title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
	  </div>

        </slot>
      </Host>
    );
  }

}
