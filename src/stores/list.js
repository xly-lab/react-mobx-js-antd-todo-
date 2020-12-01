import { observable ,makeAutoObservable, action, computed} from 'mobx'
import {message} from 'antd'

class ListData {
    constructor() {
                makeAutoObservable(this)
            }
    @observable sta = 'all'
    @observable pageNum = 1
    @observable list=[
        {
            title: "Ant Design Title 0",
            status:false
        },
        {
            title: "Ant Design Title 1",
            status:false
        },
        {
            title: "Ant Design Title 2",
            status:false
        },
        {
            title: "Ant Design Title 3",
            status:false
        },
    ]
    @action
    addList=(da)=>{
        let has = this.list.some(item=>item.title===da.title)
        if(!has){
            this.list.push(da)
        }else{
            message.warning('已存在！')
        }
    }
    @action
    deleteList=(item)=>{
        let key
        this.list.forEach((it,i)=>{
            if(it.title===item.title){
                key =i
            }
        })
        this.list.splice(key,1);
    }
    @action
    setStatus =(status)=>{
        this.sta = status
    }
    @action
    changeListStatus = (item,status) =>{
        let key
        this.list.forEach((it,i)=>{
            if(it.title===item.title){
                key =i
            }
        })
        this.list[key].status = (status===2?true:false)
    }
    @action
    setPageNum = (e) =>{
        this.pageNum = e
    }
    @computed get newList(){
        const {sta} = this
        let newList
        switch(sta){
            case 'all' :
                newList = this.list
                break;
            case 'ok':
                newList = this.list.filter(item=>item.status)
                break;
            case 'no':
                newList = this.list.filter(item=>!item.status)
                break;
            default:
                newList= this.list
                break;
        }
        return newList
    }

}

export default ListData;