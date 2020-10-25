import { Component, ComponentInterface, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'post-card',
  styleUrl: 'post-card.css',
  shadow: true,
})
export class PostCard implements ComponentInterface {
  @Prop() _id: string;
  @Prop() titulo: string;
  @Prop() contenido: string;
  @Prop() nombre: string;
  @Event() boton: EventEmitter;

llamarBoton(){
  this.boton.emit();
}


  render() {
    return (

      <main>
<header><slot name="header" /></header>
<section><slot name="section" />
<article class="card">
    <p class="card__excerpt">{this._id}</p>
      <h2 class="card__heading">{this.titulo}</h2>
      <p class="card__excerpt">{this.contenido} </p>
      <p class="card__excerpt">{this.nombre} </p>
      <button class="btn" onClick={()=> this.llamarBoton()}>Detalles</button>
      </article>

</section>

      </main>
    );
  }

}
