import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'foo-ter',
  styleUrl: 'foo-ter.css',
  shadow: true,
})
export class FooTer implements ComponentInterface {
  @Prop() nombre: string;
  @Prop() copia: string;
  @Prop() derechos: string;
  @Prop() privado: string;
  render() {
    return (
      <Host>
        <slot>
          <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
            <ul>
        <li class="f6 dib ph2 link mid-gray dim">{this.nombre}</li>
        <li class="f6 dib ph2 link mid-gray dim">{this.copia}</li>
       <li class="f6 dib ph2 link mid-gray dim">{this.derechos}</li>
       <li class="f6 dib ph2 link mid-gray dim">{this.privado}</li>
       </ul>
       </footer>
        </slot>
      </Host>
    );
  }

}
