import React from 'react'
import { useLocalStore, useObserver } from 'mobx-react' // 6.x

export default  () => {
    const todo = useLocalStore(() => ({
        title: 'Click to toggle',
        done: false,
        toggle() {
            todo.done = !todo.done
        },
        get emoji() {
            return todo.done ? '😜' : '🏃'
        },
    }))

    return useObserver(() => (
        <h3 onClick={todo.toggle}>
            {todo.title} {todo.emoji}
        </h3>
    ))
}