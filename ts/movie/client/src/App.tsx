import React, { useState } from 'react';
import './App.css';
import { IMovie, MovieService } from './services/MovieService';
import {store} from './redux/store'
import {setLoadingAction} from './redux/actions/MovieAction';
store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(setLoadingAction(true))
function App() {
  const [list,setList] = useState<IMovie[]>([])
  return (
    <div className="App">
      {list.map(m=><div key={m._id}>{m.name}</div>)}
    </div>
  );
}

export default App;
