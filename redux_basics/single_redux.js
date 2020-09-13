const redux = require('redux');
const createStore = redux.createStore;

const initialState = {     //initialise the values
    numberOfBooks: 10
}

// function returning action,
// Action creator: wraping the action in a single function
function buyBook() { // define buyBook action, and return type and info
    return {
        // action
        type: "Buy_Book",
        info: "My first Redux code"
    }
}

// In reducer (prevState, action) => newState

const Reducer = (state = initialState, action) => { 
    switch(action.type) {
        case "Buy_Book": return{
            ...state,               //to clone state value
            numberOfBooks: state.numberOfBooks - 1
        }

        default: return state
    }

}

const store = createStore(Reducer); //created store and passing reducer function into it
console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(()=> {console.log('Updated state value', store.getState())});
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
unsubscribe();

