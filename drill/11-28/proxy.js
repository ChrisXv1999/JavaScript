// revocable 撤销代理  const { proxy, revoke } = Proxy.revocable(target, handler)
// proxy  
// 反射AIP reflect.get 

/**
 * 执行失败都会返回false
 * Reflect.defineProperty()
 * Reflect.preventExtensions()
 * Reflect.setPrototypeOf()Reflect.set()
 * Reflect.deleteProperty()
 */
 let person = {
  name: 'chris',
  age: 18,
 }
 Reflect.defineProperty(person, 'age', {
  // writable: false,
  configurable: false,
  // value: 20
  // enumerable: false
 })
 let result =  Reflect.deleteProperty(person, 'age');
//  console.log(result,person); false person
// 代理不能代理Date 

/**
 * get 
 * @param
 * target 目标对象
 * property 字符串属性
 * receiver 代理对象
 * @return any
 * */ 
const getProxy = new Proxy(person,{
  get(...rest) {
    console.log(rest)
    return Reflect.get(...rest)
  }
})
/**
 * set
 * @param 
 * target 目标对象
 * property 字符串属性
 * value 设置的值
 * receiver 代理对象
 */
const setProxy = new Proxy(person,{
  set(target,property, value, receiver) {
    console.log(value);
    return Reflect.set(target,property, value, receiver)
  }
}) 
// console.log(setProxy.age = 19);
/**
 * has
 * @param 
 * target 目标对象
 * property 字符串属性
 * @return Boolean
 * 如果 target.property 存在且不可配置，则处理程序必须返回 true
 * 如果 target.property 存在且目标对象不可扩展，则处理程序必须返回 true
 */
const hasProxy = new Proxy(person, {
  has: Reflect.has
})

// console.log('age' in hasProxy);
/**
 * defineProperty
 * getOwnPropertyDescriptor
 * deleteProperty => delete
 * ownKeys => Object.keys()
 * getPrototypeOf
 * setPrototypeOf
 * isExtensible 是否可扩展
 * preventExtensions
 * apply
 * construct
 */