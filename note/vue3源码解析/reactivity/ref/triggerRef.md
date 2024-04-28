### triggerRef
[triggerRefValue](./track.md#triggerrefvalue)
```ts
export function triggerRef(ref: Ref) {
  triggerRefValue(ref, DirtyLevels.Dirty, __DEV__ ? ref.value : void 0)
}