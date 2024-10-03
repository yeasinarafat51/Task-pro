import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case "Increment" :
            return {count: state.count + 1}
        case "Decrement" :
            return {count: state.count - 1}

            default:
                throw new Error('tjgdjgdgjdflhjf')
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    const Increment = () =>{
        dispatch({type: "Increment"})
    }
    const Decrement = () =>{
        dispatch({type: "Decrement"})
    }
    return (
        <div className="m-12">
            <p>Count:{state.count}</p>
            <button className="btn btn-primary mx-4 px-2" onClick={Increment}>Increment</button>
            <button  className="btn btn-primary mx-4" onClick={Decrement}>Decrement</button>

            
        </div>
    );
};

export default UseReducer;