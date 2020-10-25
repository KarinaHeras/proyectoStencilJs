import { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
export declare class PostCard implements ComponentInterface {
    _id: string;
    titulo: string;
    contenido: string;
    nombre: string;
    boton: EventEmitter;
    llamarBoton(): void;
    render(): any;
}
