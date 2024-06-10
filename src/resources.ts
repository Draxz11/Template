import { ImageSource, Loader } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png"
import imagem from "./images/logo-vertical.png"

import pngTilesetPath from "./Maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./Maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./Maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./Maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./Maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./Maps/Showroom_map.tmx?url"
import { TiledResource } from "@excaliburjs/plugin-tiled";

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  LogoVertical: new ImageSource(imagem),
  Gamificacapo: new ImageSource(imagem),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath },
      { path: "tileset_paredes.tsx", output: tsxParedesPath },
      { path: "tileset_generic.tsx", output: tsxGenericPath },
      { path: "tileset_estoque.tsx", output: tsxEstoquePath },
      { path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath }
    ]
  })
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}

