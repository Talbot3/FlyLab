const { useEffect, useState } = require("react");

function useLocalStoreageState(key, defaultValue) {
    const [state, setState] = useState(()=>{
        let value;
        try {
           value = JSON.parse(
               window.localStorage.getItem(key) || String(defaultValue)
           );
        } catch (error) {
           value = defaultValue;
        }
        return value;
    });
    useEffect(()=>{
        window.localStorage.setItem(key, state);
    }, [state]);
    return [state, setState];
}

function Counter() {
    const [count, setCount] = useLocalStoreageState('my-app-count', 0);
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Counter;