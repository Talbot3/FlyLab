import React, {useState, useEffect, useReducer} from 'react';

import  './index.less';


const initialState = { count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count +1 };
    case 'decrement':
      return {count: state.count -1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
      <button onClick={()=> dispatch({type: 'increment'})}>+</button>
    </>
  )
}

export default () => {
  const [count, setCount] = useState(0);
  const [age, ustAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{text: 'Learn Hooks'}]);

  useEffect(()=> {
    // 使用浏览器的API更新页面标题
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="triangle">
        <div>Page index</div>
        <div className="underline"></div>
        <p>You clicked {count} times</p>
        <button onClick={()=> setCount(count + 1)}>
          Click me
        </button>
        <Counter/>
    </div>
  );
}
