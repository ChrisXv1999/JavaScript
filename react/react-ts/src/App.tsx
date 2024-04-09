import React, { useState, useId, useRef, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import XClock from './components/clock/x-clock';
import Form, { exposeFormData } from './components/form/form';
import './App.css';
import XButton from './components/x-button/x-button';
import XCanvas from './components/x-canvas/x-canvas';
function App() {
  const [name, setName] = useState('world');
  const text: string = useMemo(() => {
    return `hello ${name}`;
  }, [name])
  const element: JSX.Element = <h1>{text}</h1>;
  const ref = useRef<exposeFormData>(null);
  function onLogFormValue() {
    setName(ref.current?.value as string);
  }
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          {element}
          <div style={{ display: 'flex' }}>
            <Link to="/form">表单</Link>
            <Link to="/clock">时钟</Link>
            <Link to="/canvas">canvas</Link>
          </div>
          <XButton onClick={onLogFormValue}>获取form内容</XButton>
          <Routes>
            <Route path="/form" index element={<Form ref={ref} />}></Route>
            <Route path="/clock" element={<XClock title="当前时间" />}></Route>
            <Route path="/canvas" element={<XCanvas />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
