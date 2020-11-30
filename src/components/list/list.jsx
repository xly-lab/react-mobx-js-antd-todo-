import React, { Component } from "react";
import { List } from "antd";
import { observer, inject } from "mobx-react";
import "./list.css";

import { CloseOutlined, SmileOutlined ,CheckCircleOutlined,CloseCircleOutlined} from "@ant-design/icons";



@observer
class Item extends Component {
    
    render() {
        const { item } = this.props;

        return <a href="https://ant.design">
        {item.title}
    </a>
    }
    }




@inject("listData")
@observer
class listLLL extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // const { setList } = this.props.ListData;
        // setList(data);
    }
    componentDidMount() {
    
    }

    deleteListItem=(index)=>{
        const { deleteList } = this.props.listData;
        deleteList(index);
    }
    changeStatus = (index,status) =>{
        const { changeListStatus } = this.props.listData
        changeListStatus(index,status)
    }
    render() {
        const { newList } = this.props.listData;
 
        //eslint-disable-next-line
        // listData.list.length; 
        return (
        <div className="_list">
            <List
            itemLayout="horizontal"
            dataSource={newList}
            renderItem={(item, i) => (
                <List.Item>
                <SmileOutlined />
                <List.Item.Meta
                    title={
                        <>
                    <a href="https://ant.design">
                        {item.title}====={i}
                    </a>
                    <Item item={item}></Item>
                    </>
                    }
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                {item.status?<CheckCircleOutlined onClick={()=>this.changeStatus(i,1)}/>:null}
                {!item.status?<CloseCircleOutlined onClick={()=>this.changeStatus(i,2)}/>:null}
                <CloseOutlined onClick={()=>this.deleteListItem(i)} />
                </List.Item>
            )}
            />
            {/* {ListData.i} */}
        </div>
        );
    }
    }
export default listLLL;
