import StoreInterface from "./StoreInterface";

class AppStore extends StoreInterface {
    constructor() {
        super({
            todoList:[],
            filter:"all",
        }, "dataStore");
    }
    _setTodoStatus(id){
        let {todoList} = this._store;
        todoList.map((item,i) => {
            if(item['id'] == id){
                todoList[i]['status'] = "inactive";
            }
        });
        this._store.todoList = todoList;
        this._emitChange();
    }

    _handleTodlist(status){
        let {todoList} = this._store;
        this._store.todoList = todoList;        
        this._emitChange();
    }
    _registerToActions(payload) {
        let action = payload.action;
        switch (action.actionType) {
            case "ADD_TODO":
                let {todoList} = this._store;
                    todoList.push({
                        id:todoList.length + 1,
                        item:action.item,
                        status:"active"
                    });
                this._store.todoList = todoList;
                this._emitChange();
                break;
            case "STRIKE_TODO":
                this._setTodoStatus(action.id);
                break;
            case "SET_STATUS":
                this._store.filter = action.status;
                this._emitChange();
                // this._setTodoStatus(action.status);
                break;
            default:
                break;
        }
    }

}

export default new AppStore();