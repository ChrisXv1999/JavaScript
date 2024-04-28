### toRef
参数
- `source`: 目标对象
- `key`: 目标对象的键 可选
- `defaultValue`: key 值不存在时的默认值

```ts
export function toRef<T>(
  value: T,
): T extends () => infer R
  ? Readonly<Ref<R>>
  : T extends Ref
    ? T
    : Ref<UnwrapRef<T>>
export function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K,
): ToRef<T[K]>
export function toRef<T extends object, K extends keyof T>(
  object: T,
  key: K,
  defaultValue: T[K],
): ToRef<Exclude<T[K], undefined>>
export function toRef(
  source: Record<string, any> | MaybeRef,
  key?: string,
  defaultValue?: unknown,
): Ref {
  if (isRef(source)) {
    return source
  } else if (isFunction(source)) {
    return new GetterRefImpl(source) as any
  } else if (isObject(source) && arguments.length > 1) {
    return propertyToRef(source, key!, defaultValue)
  } else {
    return ref(source)
  }
}
```

1. 通过is·Ref判断是否是ref类型，如果是直接返回source
2. 是否是一个函数，如果是，调用GetterRefImpl 返回
3. 如果是普通对象 且参数>1 通过 propertyToRef 返回
4. 都不满足 直接用ref包裹返回
### toRefs
```ts
export function toRefs<T extends object>(object: T): ToRefs<T> {
  if (__DEV__ && !isProxy(object)) {
    warn(`toRefs() expects a reactive object but received a plain one.`)
  }
  const ret: any = isArray(object) ? new Array(object.length) : {}
  for (const key in object) {
    ret[key] = propertyToRef(object, key)
  }
  return ret
}
```
### propertyToRef

```ts
function propertyToRef(
  source: Record<string, any>,
  key: string,
  defaultValue?: unknown,
) {
  const val = source[key]
  return isRef(val)
    ? val
    : (new ObjectRefImpl(source, key, defaultValue) as any)
}
```
### ObjectRefImpl
```ts
class ObjectRefImpl<T extends object, K extends keyof T> {
  public readonly __v_isRef = true

  constructor(
    private readonly _object: T,
    private readonly _key: K,
    private readonly _defaultValue?: T[K],
  ) {}

  get value() {
    const val = this._object[this._key]
    return val === undefined ? this._defaultValue! : val
  }

  set value(newVal) {
    this._object[this._key] = newVal
  }

  get dep(): Dep | undefined {
    return getDepFromReactive(toRaw(this._object), this._key)
  }
}
```

