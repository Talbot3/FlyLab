const { useEffect, useState } = require("react")

const useDocumentTitle = title => {
    useEffect(()=>{
        document.title = title;
    }, [title]);
}

function Counter() {
    const [count, setCount] = useState(0);
    const increment = ()=> setCount(count + 1);
    const title = `you clicked ${count} times.`;
    useDocumentTitle(title);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment} > Increment </button>
        </div>
    )
}

export default Counter;