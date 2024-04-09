interface Person {
    name:string,
    age:number,
    wealth:number
}
type FPerson = new (name:string,age:number,wealth:number)=>Person

type BasicType = string | number | boolean | null | undefined | symbol 

type FetchData = Promise<string[]>;
const fetchData:FetchData = new Promise(resolve=>{
    resolve(['1'])
});
//Awaited 去除promise的返回值类型 多层promise也会返回最终类型
type Result = Awaited<FetchData>;
//提取构造方法Type的参数类型，组成一个元组类型返回。
type CPerson = ConstructorParameters<FPerson>
const cp:CPerson = ['chris',18,9999999];



type NotEmpty = Exclude<BasicType,undefined|null>

type Age = Extract<BasicType,number>
const age:Age = 18;
//InstanceType<Type>提取构造函数的返回值的类型（即实例类型），参数Type是一个构造函数，等同于构造函数的ReturnType<Type
type SPerson = InstanceType<FPerson>;

