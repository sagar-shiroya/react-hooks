import React, {useRef} from 'react'

function App3() {
    const sound = useRef();
    const color = useRef();

    const submit = (e)=>{
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`For sound '${soundVal}' and matching color is '${colorVal}'`);
        sound.current.value='';
        color.current.value='';
    };

    return (
        <>
            <h2><span>useRef Hooks</span></h2>
            <form onSubmit={submit}>
                <input ref={sound}type="text"  placeholder='Sound...'/><br/>
                <input ref={color} type="color"  /><br/>
                <button>Add</button>
            </form>
        </>
        
    )
}

export default App3
