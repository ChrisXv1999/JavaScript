//ts 其他文件定义相同类型接口 即使没有引入 也可能会有标红提示
namespace keyof {
    interface Person {
        name: string;
        age: number;
        hobbit?: string[];
    }
    function getValue<T extends object,K extends keyof T>(obj:T,key:K):T[K]{
        return obj[key]
    }
    let person:Person = {
        name: 'chris',
        age: 18,
    }
    getValue(person,'age')
}