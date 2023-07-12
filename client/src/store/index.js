import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#ff698f",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  logoDecalScaling: 1,
  fullDecal: "./threejs.png",
  fullDecalScaling: 1,
});

export default state;
