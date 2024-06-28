import React, { useEffect } from 'react';
export default function Son(props) {
  useEffect(() => {
    console.log('Son组件挂载');
    return () => {
      console.log('Son组件卸载');
    }
  }, [])
  return (
    <div>
      <p>我是Son组件</p>
    </div>
  );
}