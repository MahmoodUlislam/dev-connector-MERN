import { useState } from 'react';
import ReactDOM from 'react-dom';



function Counter() {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);
    }
    return (
        <div id="mainArea">
            <p>button count: <span>{count}</span></p>
            <button id="mainButton" onClick={incrementCount}>Increase</button>
        </div>
    );
}

ReactDOM.render(
    <Counter />,
    document.getElementById('root')
);