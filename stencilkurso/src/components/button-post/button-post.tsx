import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'button-post',
  styleUrl: 'button-post.css',
  shadow: true,
})
export class ButtonPost implements ComponentInterface {

  @Prop() detalles: string;
  @Event() boton: EventEmitter;

  llamarBoton(){
    this.boton.emit();
  }
  render() {
    return (
      <button>
      <button class="btn" onClick={()=> this.llamarBoton()}></button>
    </button>
    );
  }

}
