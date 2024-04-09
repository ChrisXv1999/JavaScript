import React, { useEffect, useState ,useRef, forwardRef,useImperativeHandle} from 'react';
interface FormProps {}
export interface exposeFormData {
    value:string
}
export default forwardRef<exposeFormData, FormProps>(function Form(props,ref) {
    const [value, setValue] = useState('');
    useImperativeHandle(ref,()=>{
        return ({
            value
        })
    })
    return (<>
        <p>输入内容{value}</p>
        <input type="text" value={value} onChange={(e) => { setValue(e.target.value) }} />
    </>)
})
