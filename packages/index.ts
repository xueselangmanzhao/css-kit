/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { WaterBoxPlugin } from './WaterBox';

const CSSKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    WaterBoxPlugin.install?.(app);
  },
};

export default CSSKitPlugin;

export * from './Button'
export * from './WaterBox'