import logo from './logo.svg';
import React,{Component} from 'react'
import {Button} from 'antd'
import './App.css';

import List from './components/list/list'
import Header from './components/header/header'
import InputTxt from './components/input/input.jsx'
class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <InputTxt/>
        <List/>
      </div>
    )
  }
}

export default App;
