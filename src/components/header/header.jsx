import React,{Component} from 'react';
import './header.css'

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state={};
    }
    componentDidMount(){}

    render(){
        return (
            <div className='header'>Todo</div>
        )
    }
}