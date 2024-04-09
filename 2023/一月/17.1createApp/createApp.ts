//path vue3\packages\runtime-dom\src\index.ts
//首先会调用 ensureRenderer()上面的createApp createApp2
//createApp2 path vue3\packages\runtime-core\src\apiCreateApp.ts

/**
 * 
 * @param rootComponent 
 * @param rootProps 
 */
// normalizeContainer
//渲染主要通过 render > patch
//path vue3\packages\runtime-core\src\renderer.ts 
//line 2320
//patch  line 358
//n1 旧节点 n2 新节点 container 挂载元素
// patch(
//     n1,
//     n2,
//     container,
//     anchor = null,
//     parentComponent = null,
//     parentSuspense = null,
//     isSVG = false,
//     slotScopeIds = null,
//     optimized = __DEV__ && isHmrUpdating ? false : !!n2.dynamicChildren
//   )
//processText 
//组件使用processComponent mount阶段直接调用内部的updateComponent