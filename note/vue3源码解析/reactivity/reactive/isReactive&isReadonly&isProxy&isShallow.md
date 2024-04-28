### isReactive
```ts
export function isReactive(value: unknown): boolean {
  if (isReadonly(value)) {
    return isReactive((value as Target)[ReactiveFlags.RAW])
  }
  return !!(value && (value as Target)[ReactiveFlags.IS_REACTIVE])
}
```

### isReadonly
```ts
export function isReadonly(value: unknown): boolean {
  return !!(value && (value as Target)[ReactiveFlags.IS_READONLY])
}
```
### isShallow
```ts
export function isShallow(value: unknown): boolean {
  return !!(value && (value as Target)[ReactiveFlags.IS_SHALLOW])
}
```
### isProxy
```ts
export function isProxy(value: any): boolean {
  return value ? !!value[ReactiveFlags.RAW] : false
}
```
