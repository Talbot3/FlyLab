import { observer, useLocalStore} from 'mobx-react'

export default observer((props)=>{
    const store = useLocalStore(()=>({
        count: props.initialCount || 0,
        inc() {
            store.count += 1
        }
    }));

    return (
        <div>
            <span>{store.count}</span>
            <button onClick={store.inc}>Increment</button>
        </div>
    )
})