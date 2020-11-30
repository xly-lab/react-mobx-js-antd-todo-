import { observable ,makeAutoObservable, action, computed} from 'mobx'

class ListData {
    constructor() {
                makeAutoObservable(this)
            }
    @observable sta = 'all'
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
        this.list.push(da)
    }
    @action
    deleteList=(index)=>{
        this.list.splice(index,1);
    }
    @action
    setStatus =(status)=>{
        console.log(status)
        this.sta = status
        console.log(status)
    }
    @action
    changeListStatus = (index,status) =>{
        console.log(this.list[index])
        this.list[index].status = (status===2?true:false)
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
            case 'NO':
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