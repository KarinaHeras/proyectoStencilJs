import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'home-post',
  styleUrl: 'home-post.css',
  shadow: true,
})
export class HomePost implements ComponentInterface {

  render() {
    return (
      <Host></Host>

//         <div id="welcome">
//   <span class="welcome-heading">Welcome</span>
//   <br>

//   <p>Creado por Karina Heras gracias por los like.</p>
//   <p>
//     <a href="#">Home</a> <a href="#">About us</a> <a href="#">Login</a>
//   </p>
// </div>

    );
  }

}
