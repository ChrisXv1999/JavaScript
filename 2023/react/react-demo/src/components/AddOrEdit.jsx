import { useState } from "react";
import request from "../api/request";

export default function AddOrEdit(props) {
    /*eslint-disable*/
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    function updateState(key, value) {
        const methodMap = {
            'name': setName,
            'age': setAge,
        }
        methodMap[key](value)
    }
    function submit() {
        // request({
        //     url: 'students',
        //     method: 'POST',
        //     data: {
        //         name,
        //         age
        //     }
        // })
    }

    return (
        <div>
            <h3>添加用户</h3>
            用户名：<input value={name} onChange={(e) => updateState('name', e.target.value)}></input>
            <br />
            年龄：<input value={age} onChange={(e) => updateState('age', e.target.value)}></input>
            <br />
            <button>取消</button>
            <button onClick={submit}>确认</button>
        </div>
    );
}