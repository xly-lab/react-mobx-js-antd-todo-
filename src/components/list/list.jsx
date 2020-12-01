import React, { Component } from "react";
import { List ,Pagination} from "antd";
import { observer, inject } from "mobx-react";
import "./list.css";

import { CloseOutlined, SmileOutlined ,CheckCircleTwoTone,CloseCircleTwoTone} from "@ant-design/icons";



@observer
class Item extends Component {
    
    render() {
        const { item } = this.props;
        return  <a href="https://ant.design">{item.title}</a>
    }
}

@observer
class RenderItem extends Component {
    changeStatus2 = (index,status) =>{
        const { changeListStatus } = this.props.listData
        changeListStatus(index,status)
    }
    deleteListItem=(index)=>{
        const { deleteList } = this.props.listData;
        deleteList(index);
    }
    render() {
        const { item,i, sta} = this.props;
        return  <List.Item>
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
        />
        {item.status ? 
        <CheckCircleTwoTone twoToneColor="#52c41a" onClick={()=>this.changeStatus2(item,1)}/> :
        <CloseCircleTwoTone twoToneColor="#eb2f96"  onClick={()=>this.changeStatus2(item,2)}/>}
        {sta==='all'?<CloseOutlined onClick={()=>this.deleteListItem(item)} />:null}
        </List.Item>
    }
}



@inject("listData")
@observer
class listLLL extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
    }
    onChangePages=(e)=>{
        const {setPageNum} = this.props.listData
        setPageNum(e)
    }
    render() {
        const { newList,sta ,pageNum} = this.props.listData;
        //eslint-disable-next-line
        let newShowList = newList.slice((pageNum-1)*10,pageNum*10)
        return (
        <div className="_list">
            <List
            itemLayout="horizontal"
            dataSource={newShowList}
            renderItem={(item, i) => (
                <RenderItem item={item} i={i} sta={sta} listData={this.props.listData}/>
            )}
            />
            <Pagination defaultCurrent={1} 
                        current={pageNum}
                        pageSizeOptions={'10'} 
                        total={newList.length} 
                        onChange={this.onChangePages}
                        hideOnSinglePage={true}/>
        </div>
        );
    }
    }
export default listLLL;
