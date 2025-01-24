import './counter.css'
import { useState } from 'react'

function Counter (){
    const [count, setCount] = useState(0)

    function countFunction(){
        setCount(count + 1);
    }

    return(
        <button onClick={countFunction}>
            Clicked {count} times
        </button>
    );
}

export default Counter