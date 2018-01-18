import AppDispatcher from "./AppDispatcher";
export default {
    addTodo: function(todoItem) {
        AppDispatcher.handleViewAction({
            actionType: 'ADD_TODO',
            item:todoItem
        });
    },
    strikeTodo : function(id,status){
    	AppDispatcher.handleViewAction({
            actionType: 'STRIKE_TODO',
            id:id
        });
    },
    setFilter :function(status){
    	AppDispatcher.handleViewAction({
            actionType: 'SET_STATUS',
            status:status
        });
    }
 }
       