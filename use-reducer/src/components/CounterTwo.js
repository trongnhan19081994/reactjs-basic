import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState;
        default: 
            return state;
    }
}

function CounterTwo() {
    const [countabc, dispatch] = useReducer(reducer, initialState);
    //console.log(useReducer(reducer, initialState));
    return (
        <div>
            <div> Count: {countabc.firstCounter} </div>
            <div> Count second: {countabc.secondCounter} </div>
            <button onClick={()=> dispatch({type: 'increment', value: 2})} > Increment 2</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 2})}> Decrement 2</button>
            <button onClick={()=> dispatch({type: 'increment', value: 5})} > Increment 5</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 5})}> Decrement 5</button>
            <button onClick={()=> dispatch({type: 'increment2', value: 10})} > Increment second 10</button>
            <button onClick={()=> dispatch({type: 'decrement2', value: 10})}> Decrement second 10</button>
            <button onClick={()=> dispatch({type: 'reset'})}> Reset 2</button>
        </div>
    )
}

export default CounterTwo
