/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

 import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

 const routes = [{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
  },{
    title: '水球',
    name: 'WaterBox',
    path: '/components/WaterBox',
    component: () => import('packages/WaterBox/docs/README.md'),
  }];
 
 const routerConfig = {
   history: createWebHashHistory(),
   routes,
   scrollBehavior(to: any, from: any) {
     if (to.path !== from.path) {
       return { top: 0 };
     }
   },
 };
 
 const router = createRouter(routerConfig as RouterOptions);
 
 export default router;
