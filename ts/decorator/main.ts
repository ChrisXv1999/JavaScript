@countInstances()
// @forbiddenInstantiate()
class User{
    constructor(public name:string){
       
    }
}

function forbiddenInstantiate<T>(){
    return function(value:new (...arg:any[])=>object,context:ClassDecoratorContext){
        return class extends value{
            constructor(...arg:any[]){
                console.log(new.target);
                throw new TypeError('This class can’t be new-invoked');
                super(...arg);
            }
        } as T
    }
}
function countInstances<T>(){
    let count = 0;
    return (value:new (...arg:any[])=>object,context:ClassDecoratorContext)=>{
        return class extends value {
            no:number = ++count;
            constructor(...arg:ConstructorParameters<typeof value>){
                super(...arg);
            }
        } as T
    }
}

const u1 = new User('1');
// const u2 = new User('2');
console.log(u1 instanceof User) // true;




export {}