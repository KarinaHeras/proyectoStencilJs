/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface ButtonPost {
        "detalles": string;
    }
    interface FooTer {
        "copia": string;
        "derechos": string;
        "nombre": string;
        "privado": string;
    }
    interface GkHoly {
    }
    interface HomePost {
    }
    interface MenuStx {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PostCard {
        "_id": string;
        "contenido": string;
        "nombre": string;
        "titulo": string;
    }
    interface PostDetail {
        "_id": string;
        "comentario": string;
        "nickname": string;
        "titulo": string;
    }
}
declare global {
    interface HTMLButtonPostElement extends Components.ButtonPost, HTMLStencilElement {
    }
    var HTMLButtonPostElement: {
        prototype: HTMLButtonPostElement;
        new (): HTMLButtonPostElement;
    };
    interface HTMLFooTerElement extends Components.FooTer, HTMLStencilElement {
    }
    var HTMLFooTerElement: {
        prototype: HTMLFooTerElement;
        new (): HTMLFooTerElement;
    };
    interface HTMLGkHolyElement extends Components.GkHoly, HTMLStencilElement {
    }
    var HTMLGkHolyElement: {
        prototype: HTMLGkHolyElement;
        new (): HTMLGkHolyElement;
    };
    interface HTMLHomePostElement extends Components.HomePost, HTMLStencilElement {
    }
    var HTMLHomePostElement: {
        prototype: HTMLHomePostElement;
        new (): HTMLHomePostElement;
    };
    interface HTMLMenuStxElement extends Components.MenuStx, HTMLStencilElement {
    }
    var HTMLMenuStxElement: {
        prototype: HTMLMenuStxElement;
        new (): HTMLMenuStxElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPostCardElement extends Components.PostCard, HTMLStencilElement {
    }
    var HTMLPostCardElement: {
        prototype: HTMLPostCardElement;
        new (): HTMLPostCardElement;
    };
    interface HTMLPostDetailElement extends Components.PostDetail, HTMLStencilElement {
    }
    var HTMLPostDetailElement: {
        prototype: HTMLPostDetailElement;
        new (): HTMLPostDetailElement;
    };
    interface HTMLElementTagNameMap {
        "button-post": HTMLButtonPostElement;
        "foo-ter": HTMLFooTerElement;
        "gk-holy": HTMLGkHolyElement;
        "home-post": HTMLHomePostElement;
        "menu-stx": HTMLMenuStxElement;
        "my-component": HTMLMyComponentElement;
        "post-card": HTMLPostCardElement;
        "post-detail": HTMLPostDetailElement;
    }
}
declare namespace LocalJSX {
    interface ButtonPost {
        "detalles"?: string;
        "onBoton"?: (event: CustomEvent<any>) => void;
    }
    interface FooTer {
        "copia"?: string;
        "derechos"?: string;
        "nombre"?: string;
        "privado"?: string;
    }
    interface GkHoly {
    }
    interface HomePost {
    }
    interface MenuStx {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PostCard {
        "_id"?: string;
        "contenido"?: string;
        "nombre"?: string;
        "onBoton"?: (event: CustomEvent<any>) => void;
        "titulo"?: string;
    }
    interface PostDetail {
        "_id"?: string;
        "comentario"?: string;
        "nickname"?: string;
        "titulo"?: string;
    }
    interface IntrinsicElements {
        "button-post": ButtonPost;
        "foo-ter": FooTer;
        "gk-holy": GkHoly;
        "home-post": HomePost;
        "menu-stx": MenuStx;
        "my-component": MyComponent;
        "post-card": PostCard;
        "post-detail": PostDetail;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-post": LocalJSX.ButtonPost & JSXBase.HTMLAttributes<HTMLButtonPostElement>;
            "foo-ter": LocalJSX.FooTer & JSXBase.HTMLAttributes<HTMLFooTerElement>;
            "gk-holy": LocalJSX.GkHoly & JSXBase.HTMLAttributes<HTMLGkHolyElement>;
            "home-post": LocalJSX.HomePost & JSXBase.HTMLAttributes<HTMLHomePostElement>;
            "menu-stx": LocalJSX.MenuStx & JSXBase.HTMLAttributes<HTMLMenuStxElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "post-card": LocalJSX.PostCard & JSXBase.HTMLAttributes<HTMLPostCardElement>;
            "post-detail": LocalJSX.PostDetail & JSXBase.HTMLAttributes<HTMLPostDetailElement>;
        }
    }
}
