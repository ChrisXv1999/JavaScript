type personGender = "男" | "女";
@count()
class User {
    @description('账户')
    @require
    @validateLength(3, 5)
    loginId: string; // len 3-5
    password: string; // len 6-12
    age: number; // 0-100
    gender: personGender;
    constructor(id: string, password: string, age: number, gender: personGender) {
        this.loginId = id;
        this.password = password;
        this.age = age;
        this.gender = gender;
    }
    @method()
    sayName(){
        console.log(this.loginId);
        
    }
}
const u1 = new User('chris', '123456', 18, '男');
const u2 = new User('chris', '123456', 18, '男');
console.log(u1);

function count() {
    let count:number = 0;
    return (val: any, config: object)=>class NewUser {
        loginId: string; // len 3-5
        password: string; // len 6-12
        age: number; // 0-100
        gender: personGender;
        count:number= 0;
        constructor(id: string, password: string, age: number, gender: personGender) {
            this.loginId = id;
            this.password = password;
            this.age = age;
            this.gender = gender;
            this.count = count++;
        }
        sayName(){
            console.log(this.loginId);
            
        }
    }
}


//对用户对象中的数据进行验证
function require(val: any, config: object) {
    return
}
function description(desc: string) {
    return (val: any, config: object) => {

    }
}
//可不可以通过ts必须让第二个参数大于第一个参数
function validateLength(min: number, max: number) {
    return (val: any, config: object) => {
    }
}

function method() {
    return (val: any, config: object) => {
        console.log(typeof val,config);//function config
    }
}



