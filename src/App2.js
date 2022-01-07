import { useReducer } from 'react'

const initialState = {
    message: 'Hi'
}

function reducer(state, action) {
    switch(action.type){
        case 'yell':
            return {
                message: `HELLO!`
            }
        case 'whisper':
            return{
                message: `excuse me`
            }
    }
}

function App2() {
    const [number, setNumber] = useReducer(
        (number, newNumber) => (number + newNumber), 0);
    
    const [checked, toggle] = useReducer( (checked)=>!(checked), false);

    const [state, dispatch] = useReducer( reducer, initialState);

    return (
        <>
        <h2><span>useReducer Hooks</span></h2>
        <p>Click on below number to increment by 1</p>
        <p onClick={()=>setNumber(1)}>{number}</p>

        <input type="checkbox" value={checked} onClick={()=>toggle()}/>
        <span>{checked ? 'Checked' : 'Not Checked'}</span>
        
        <p>Message: {state.message}</p>
        <button onClick={()=>dispatch({type:'yell'})}>YELL</button><br/>
        <button onClick={()=>dispatch({type:'whisper'})}>Whisper</button>
        <br/><hr/><br/>
        </>
    );
}

export default App2
