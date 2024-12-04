import { useState } from "react";

function Button() {
    const [count, setCount] = useState(0);
    const [isPind, setIsPined] = useState(false);
  
    const handlePin = () => {setIsPined(!isPind)};
    const handlePin2 = () => {setIsPined(p => !p)};
  
    return(
        <>
            <h2>{count}</h2>
            <button onClick={() => setCount(count +1)}> +1</button>
            <button onClick={() => setCount(count -1)}>-1</button>
    
            <br/><br/>
    
            <button onClick={() => setCount(c => c+1)}>+1</button>
            <button onClick={() => setCount(c => c-1)}>-1</button>
    
            <br/><br/>
    
            <button onClick={handlePin2}>
            {isPind && "📌"} toggle pin
            </button>
        </>
    )
}

export default Button