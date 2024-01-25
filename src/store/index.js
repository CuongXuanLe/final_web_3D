import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#cdcdcd',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './react.png',
  fullDecal: './react.png',
});

export default state;