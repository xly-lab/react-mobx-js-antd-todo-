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
            status:false
        },)
        this.setState({inputStr:''})
    }
    changeStatus1=(event)=>{
        const {setStatus,setPageNum} = this.props.listData
        setStatus(event)
        setPageNum(1)

    }
    render(){
        const {sta} = this.props.listData
        return(
            <div>
                <Input placeholder="输入你想做的，点击回车！"  value={this.state.inputStr} onInput={this.changeInput} onPressEnter= {this.handleEnter} />
                <div className='tagChoose'>
                <Button type={sta==='all'?"primary":"default"} onClick={()=>this.changeStatus1('all')}>全部</Button>
                <Button type={sta==='ok' ?"primary":"default"} onClick={()=>this.changeStatus1('ok')}>已完成</Button>
                <Button type={sta==='no' ?"primary":"default"} onClick={()=>this.changeStatus1('no')}>未完成</Button>
                </div>
            </div>
        )
    }
}
export default InputTxt