import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  toJS, spy, trace,
  observe, 
  observable, action, computed } from 'mobx';
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react'

// spy(event => {
// mobx 内部状态变化输出
//   console.log(event);
// })

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action.bound toggle() {
    this.finished = !this.finished;
  }

  @action.bound removeTodo(todo) {
    this.todos.remove(todo);
  }
}

class Store {
  @observable  todos = [];

  disposers = [];

  constructor() {
    observe(this.todos, change=> {
      // console.log(change);
      this.disposers.forEach(disposer => disposer());
      this.disposers = [];
      for(let todo of change.object) {
        let disposer = observe(todo, changex => {
          this.save();
          // console.log(changex);
        });
        this.save();
        this.disposers.push(disposer);
      }
    })
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(toJS(this.todos)));
    console.log(toJS(this.todos));
  }

  @action.bound createTodo(title) {
    this.todos.push(new Todo(title));
  }

  @computed
  get left() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

let store = new Store();

@observer
class TodoList extends Component {
  static propTypes = {
    store: PropTypes.shape({
      todos: ObservablePropTypes.observableArrayOf(ObservablePropTypes.observableObject).isRequired
    }).isRequired
  };


  render() {
    trace();
    const store = this.props.store;
    const todos = store.todos;
    return (<div className="todo-list">
      <TodoHeader store={store}/>
      <TodoView store={store}/>
      <TodoFooter store={store}/>
    </div>)
  }
}

@observer
class TodoHeader extends Component {

  state = {inputValue: ''};

  handleSubmit = (e) => {
    e.preventDefault();
    var store = this.props.store;
    var inputValue =this.state.inputValue;
    store.createTodo(inputValue);
    this.setState({inputValue: ''});
  }

  handleChange = (e) => {
    var inputValue = e.target.value;
    this.setState({
      inputValue
    });
    e.preventDefault();
  }

  render() {
    trace();
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input 
            placeholder="What needs to be finished"
            className="input"
            type="text" 
            onChange={this.handleChange} 
            value= {this.state.inputValue}/>
        </form>
      </header>
    )
  }
}

@observer
class TodoView extends Component {
  render() {
    trace();
    let store = this.props.store;
    let todos = store.todos;
    return (
      <ul>
      {
        todos.map(todo=>(
          <li key={todo.id} className="todo-item">
            <TodoItem todo={todo}/>
            <span className="delete" onClick={
              (e) => {
                store.todos.remove(todo);
              }
            }>X</span>
          </li>
        ))
      }
      </ul>
    )
  }
}

@observer
class TodoFooter extends Component {
  render() {
    trace();
    let store = this.props.store;
    return (
      <footer>
        {store.left}
      </footer>
    )
  }
}

@observer 
class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      finished: PropTypes.bool.isRequired
    }).isRequired
  }

  handleClick = (e) => {
    this.props.todo.toggle();
  }

  render() {
    trace();
    const todo = this.props.todo;
    return (<Fragment>
      <input
        type="checkbox" 
        className="toggle"
        checked={todo.finished}
        onClick={this.handleClick}
      />
      <span className={["title", todo.finished && 'finished'].join(' ')}>{todo.title}</span>
    </Fragment>);
  }
}

ReactDOM.render(<TodoList store={store}/>, document.querySelector('#root'))