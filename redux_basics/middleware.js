// const {redux, createStore, combineReducers } = require('redux');  import all in single line

const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const initialStateBooks = {     //initialise the values of books
    numberOfBooks: 10,    
}

const initialStatePens = {     //initialise the values of pens
    numberOfPens: 15
}


function buyBook() { // define buyBook action, and return type and other info
    return {
        // action
        type: "Buy_Book",
        payload: "My first action"
    }
}

function buyPen() {  // define buyPen action, and return type and other info
    return {
        // action
        type: "Buy_Pen",
        payload: "My second action"
    }
}


// In reducer (prevState, action) => newState

const booksReducer = (state = initialStateBooks, action) => { 
    switch(action.type) {
        case "Buy_Book": return{
            ...state,               //to clone state value
            numberOfBooks: state.numberOfBooks - 1
        }   

        default: return state;
    }

}

const pensReducer = (state = initialStatePens, action) => { 
    switch(action.type) {
        case "Buy_Pen": return{
            ...state,               //to clone state value
            numberOfPens: state.numberOfPens - 2
        }   

        default: return state;
    }

}

const reducer = combineReducers({
    Book: booksReducer, 
    Pen: pensReducer
});

const logger = store => {

    return next => {
        return action => {
            const result = next(action);
            console.log("middleware log", result);
            return result;
            
        }
    }
}

const store = createStore(reducer, applyMiddleware(logger)); //created store and passing reducer function into it
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=> {console.log('Updated state value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());
store.dispatch(buyPen());
unsubscribe();
