import Dispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

class StoreInterface extends EventEmitter {
    constructor(_store, _eventName) {
        super();
        this.EVENTNAME = _eventName; // Unique event name
        this._store = _store; // Object - data model
        this.dispatchToken = Dispatcher.register(this._registerToActions.bind(this)); // a function to register in dispatcher
        this._maxListeners = 0; // mean unlimited 
        if (!(_store && _eventName)) {
            // complain if _store and eventName was not provided
            console.error("Missing parameters: data -> %o, event -> %s",_store,_eventName);
        }
    }

    addStoreListener(cb) {
        this.on(this.EVENTNAME, cb);
    }

    removeStoreListener(cb) {
        this.removeListener(this.EVENTNAME, cb);
    }

    _emitChange(optional) {
        this.emit(this.EVENTNAME, optional);
    }

    getAll() {
        return this._store;
    }
    
    getDispatcher() {
        return Dispatcher;
    }

    /**
     * A function to register in the dispatcher ,
     * so dispatcher can execute based on action name.
     * should call _emitChange() when model changes
     * @param  {[Object]} payload [dispatcher payload]
     */
    _registerToActions(payload) {
        /**
         * payload structure:
         *  {
         *    source: 'VIEW_ACTION' || 'SERVER_ACTION',
         *    action: {
         *        actionType: 'Unique string for registered store 
         *                    function to loop for',
         *         "any key": Object || Boolean || number || string       
         *     }
         *   }
         */
        // console.error("Need implementation");
    }

}

export default StoreInterface;
