import { useEffect, useState } from "react";

function UseEffectExample(){

    const [count, setCount] = useState(0);

    /**
     * 每次重新渲染后执行
     */
    useEffect(() => {
        document.title = 'You clicked {count} times';
        console.log('click xx');
    })

    useEffect(() => {
        console.log('我只执行一次');
    },[])
    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me.
            </button>
            <button onClick={() => setCount(count)}>
                不变
            </button>
        </div>
    )
}

export default UseEffectExample;