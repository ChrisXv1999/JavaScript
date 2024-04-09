/**
 * 表单验证
 * inLengthRange 存在问题 如何做成可配置的max min 
 */
class Validator {
    validateMap = new Map()
    constructor(){
        this.validateMap.set('isRequired',this.isRequired);
        this.validateMap.set('inLengthRange',this.inLengthRange);
        console.log(this.inLengthRange);
    }
    isRequired={
        validate(val){
            return val !== '' && val !== undefined
        },
        errMessage: '字段不能为空',
    }
    inLengthRange={
        max: 12,
        min: 6,
        validate:(val)=>{
        },
        errMessage: `字段长度6-12`,
    }
    validate(v){
        let errorMessage = [];
        v.forEach(({value,validates=[]}) => {   
            validates.forEach(name=>{
                const validate = this.validateMap.get(name);
                if(!validate)return console.warn(`${name} is not enable validate`);
                if(!validate.validate(value)){
                    errorMessage.push( validate.errMessage)
                }
            })
        });
    }
}
const v = new Validator();
v.validate([{value:'chrisXv',validates:['isRequired','inLengthRange']}])