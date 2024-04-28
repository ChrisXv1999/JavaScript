#### trackRefValue
收集ref依赖
```ts
export function trackRefValue(ref: RefBase<any>) {
  //shouldTrack 是否需要手机  activeEffect 当前是否存在需要收集的effect
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref)
    trackEffect(
      activeEffect,
      (ref.dep ??= createDep(
        () => (ref.dep = undefined),
        ref instanceof ComputedRefImpl ? ref : undefined,
      )),
      __DEV__
        ? {
            target: ref,
            type: TrackOpTypes.GET,
            key: 'value',
          }
        : void 0,
    )
  }
}


```
##### trackEffect
```ts
export function trackEffect(
  effect: ReactiveEffect,
  dep: Dep,
  debuggerEventExtraInfo?: DebuggerEventExtraInfo,
) {
  if (dep.get(effect) !== effect._trackId) {
    dep.set(effect, effect._trackId)
    const oldDep = effect.deps[effect._depsLength]
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect)
      }
      effect.deps[effect._depsLength++] = dep
    } else {
      effect._depsLength++
    }
    if (__DEV__) {
      effect.onTrack?.(extend({ effect }, debuggerEventExtraInfo!))
    }
  }
}
```
#### createDep
```ts
export const createDep = (
  cleanup: () => void,
  computed?: ComputedRefImpl<any>,
): Dep => {
  const dep = new Map() as Dep
  dep.cleanup = cleanup
  dep.computed = computed
  return dep
}
```
#### cleanupDepEffect
```ts
function cleanupDepEffect(dep: Dep, effect: ReactiveEffect) {
  const trackId = dep.get(effect)
  if (trackId !== undefined && effect._trackId !== trackId) {
    dep.delete(effect)
    if (dep.size === 0) {
      dep.cleanup()
    }
  }
}
```





