import React,{Component} from 'react';
import { Input,Button  } from 'antd'
import {inject, observer } from 'mobx-react';

import './input.css'

@inject('listData')
@observer
class InputTxt extends Component {

    constructor(props) {
        super(props);
        this.state={
            inputStr : ''
        };
    }
    componentDidMount(){}
    changeInput=(e)=>{
        this.setState({inputStr:e.target.value})
    }
    handleEnter=()=>{
        const {addList} = this.props.listData
        addList({
            title: this.state.inputStr,
        },)
        this.setState({inputStr:''})
    }
    changeStatus=(event)=>{
        const {setStatus} = this.props.listData
        setStatus(event)
    }
    render(){
        return(
            <div>
                <Input placeholder="Basic usage"  value={this.state.inputStr} onInput={this.changeInput} onPressEnter= {this.handleEnter} />
                <div className='tagChoose'>
                <Button type="primary" onClick={()=>this.changeStatus('all')}>全部</Button>
                <Button type="default" onClick={()=>this.changeStatus('ok')}>已完成</Button>
                <Button type="default" onClick={()=>this.changeStatus('no')}>未完成</Button>
                </div>
            </div>
        )
    }
}
export default InputTxt