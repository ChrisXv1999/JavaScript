import React from "react";
import Count from './count';
import { GlobalContext,GlobalContextType } from "../../context/global";
 type OptionItem = {
    label: string,
    value?: string,
    checked?: boolean,
  }
  type AppState = {
    count: number,
    addNumber: number,
    hobbies: OptionItem[],
    selectedHobby: string,
  }
  let num = 0;
export default class ClassComponent extends React.Component {
    static contextType = GlobalContext;
    constructor(props:object){
      super(props);  
      console.log('app init',++num); 
    }
    componentDidMount(): void {
      console.log('mount');
      
    }
    clickHandel() {
  
    }
    state: Readonly<AppState> = {
      count: 0,
      addNumber: 1,
      hobbies: [
        { label: 'javascript', checked: false },
        { label: 'css', checked: false },
        { label: 'typescript', checked: false },
        { label: 'html', checked: false }
      ],
      selectedHobby: '',
    };
    add = (e: React.MouseEvent) => {
      this.setState({ count: this.state.count + this.state.addNumber })
      console.log(this.state.count);
      // setTimeout(()=>{
      //   // this.setState((state:AppState)=>({count: state.count+1}))
      //   // this.setState((state:AppState)=>({count: state.count+1}))
      //   // this.setState({count: this.state.count+1})
      //   // this.setState((state:AppState)=>({count: state.count+1}))
      //   this.setState((state:AppState)=>({count: state.count+1}),()=>{
      //     console.log(this.state.count,'111');
  
      //   })
      //   this.setState({count: this.state.count+1},()=>{
      //     console.log(this.state.count,'222');
  
      //   })
      //   this.setState((state:AppState)=>({count: state.count+1}),()=>{
      //     console.log(this.state.count,'333');
  
      //   })
      //   console.log(this.state.count);
      // },1000)
    }
    changeAddNumber = (e: React.ChangeEvent) => {
      const newVal = (e.target as HTMLInputElement).value;
      this.setState({
        addNumber: +newVal,
      })
    }
    checkedHobby = (idx:number)=>{
      const newList = this.state.hobbies.map(({label,checked},curIdx)=>{
        if(curIdx === idx) checked = !checked;
        return {
          label,
          checked
        }
      })
      this.setState({
        hobbies: newList
      })
    }
  
    uploadRef = React.createRef<HTMLInputElement>();
    uploadFileChange = ()=>{
        console.log(this.uploadRef.current?.files);
        
    }
    changeSelectHobby = (e:React.ChangeEvent)=>{
      this.setState({
        selectedHobby: (e.target as HTMLSelectElement).value
      })
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        return true
    } 
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
      console.log('update',snapshot);
      
    }
    
    render(): React.ReactNode {
      console.log('render');
      
      return (
        <div onClick={() => this.clickHandel()}>
          {(this.context as GlobalContextType).version}
          <Count count={this.state.count}></Count>
          <input value={this.state.addNumber} onChange={this.changeAddNumber} />
          <button onClick={this.add}>add</button>
          <div>
            {this.state.hobbies.map((hobby,idx) => (
              <div key={hobby.label}>
                <input onChange={()=>this.checkedHobby(idx)} checked={hobby.checked} type='checkbox' ></input>
                {hobby.label}
              </div>))
            }
          </div>
          <input type='file' ref={this.uploadRef} onChange={this.uploadFileChange}></input>
  
          <select value={this.state.selectedHobby} onChange={this.changeSelectHobby}>
            {this.state.hobbies.map((hobby,idx)=>(<option key={idx}  value={hobby.label}>{hobby.label}</option>))}
          </select>
        </div>
      )
    }
  }