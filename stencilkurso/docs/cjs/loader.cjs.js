'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c036c3fc.js');

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return index.patchEsm().then(() => {
  return index.bootstrapLazy([["button-post.cjs",[[1,"button-post",{"detalles":[1]}]]],["foo-ter.cjs",[[1,"foo-ter",{"nombre":[1],"copia":[1],"derechos":[1],"privado":[1]}]]],["gk-holy.cjs",[[1,"gk-holy"]]],["home-post.cjs",[[1,"home-post"]]],["menu-stx.cjs",[[1,"menu-stx"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["post-card.cjs",[[1,"post-card",{"_id":[1],"titulo":[1],"contenido":[1],"nombre":[1]}]]],["post-detail.cjs",[[1,"post-detail",{"titulo":[1],"nickname":[1],"comentario":[1],"_id":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
