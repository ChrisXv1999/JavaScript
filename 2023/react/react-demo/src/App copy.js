import Counter from "./components/Counter.jsx";
import React, { useState,createElement } from 'react';
function App() {
  let [count,setCount] = useState(0);
  const name = 'chris';
  function triggerChange(){
    setCount(++count)
  }
  const className = 'name'
  const rootStyle = {
    color: '#f00',
    fontSize: '20px',
  }
  {/*数组格式的jsx也需要key*/}
  const jsxArr = [
    (<span key={1}>hello</span>),
    (<span key={2}>chris</span>),
  ]
  const serverData = [
    {id:1,name:'chris',age:18},
    {id:2,name:'xv',age:18},
    {id:3,name:'yang',age:18},
  ]
  const displayList = serverData.map(({name,id,age})=> {
    return (<tr data-id={id} key={id}><td>姓名：</td><td>{name}</td><td>年龄：</td><td>{age}</td></tr>)
  })
  {/**注释必须在花括号内 */}
  const h1Element = createElement('h1',{id:'h1'},'hello React')
  console.log(displayList);
  return (<div style={rootStyle} className={className}>
    {h1Element}
    {jsxArr}
    <table><tbody>{displayList}</tbody></table>
    <Counter triggerChange={triggerChange} count={count}></Counter>
  </div>)
}

export default App;
