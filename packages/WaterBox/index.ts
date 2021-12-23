import { App, Plugin } from 'vue';
import WaterBox from './src/index.vue';

export const WaterBoxPlugin: Plugin = {
  install(app: App) {
    app.component('css-water-box', WaterBox);
  },
};

export {
  WaterBox,
};
