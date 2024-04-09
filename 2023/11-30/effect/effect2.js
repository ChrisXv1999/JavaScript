let effectFn;
function effect(fn) {
  effectFn = fn;
  fn();
}
let person = {
  name: "effect",
  version: "1.0.1",
};
let buckets = new WeakMap();
function track(target, key) {
  if (!effectFn) return;
  let depMap = buckets.get(target) || buckets.set(target, new Map()).get(target);
  let deps = depMap.get(key) || depMap.set(key, new Set()).get(key);
  deps.add(effectFn);
  effectFn = undefined;
}
function trigger(target, key) {
  let depMap = buckets.get(target);
  if (!depMap) return;
  let deps = depMap.get(key);
  if (!deps) return;
  deps.forEach((effect) => {
    effect();
  });
}
let proxyPerson = new Proxy(person, {
  get(target, key) {
    track(target, key);
    return Reflect.get(target, key);
  },
  set(target, key, newVal) {
    Reflect.set(target, key, newVal);
    trigger(target, key);
  },
});
/**
 * 问题 每次修改name时候 都会从新注册一个内部effect事件
*/
effect(() => {
  document.getElementById("p1").innerText = proxyPerson.name;
  effect(() => {
    document.getElementById("p2").innerText = proxyPerson.version;
  });
});

setTimeout(() => {
  proxyPerson.version = "1.0.2";
}, 1000);
