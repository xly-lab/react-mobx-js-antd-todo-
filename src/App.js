import React,{Component} from 'react'
import './App.css';

import List from './components/list/list'
import Header from './components/header/header'
import InputTxt from './components/input/input.jsx'
class App extends Component{

  render(){
    console.log(document.body.scrollHeight)
    let style = {height:document.body.scrollHeight+'px'}
    console.log(style)
    return(
      <div className="App" style={{style}} >
        <Header/>
        <InputTxt/>
        <List/>
      </div>
    )
  }
}

export default App;
