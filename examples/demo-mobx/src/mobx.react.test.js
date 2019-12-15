import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { observable } from 'mobx';
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react'

class Store {
  @observable cache = {queue: []};
}

const store = new Store();
// Bar Foo

@observer
class Bar extends Component {
  static propTypes = {
    queue: PropTypes.array
  };

  render() {
    const queue = this.props.queue;
    return <span>{queue.length}</span>
  }
}

class Foo extends Component {
  static propTypes = {
    cache: PropTypes.object
  };
  refresh = (key, descriptor) => {
    this.props.cache.queue.push('1');
  }

  render() {
    const cache = this.props.cache;
    console.log(cache.queue);
    return (<div>
      <button onClick = {this.refresh} >refresh</button>
      <Bar queue = {cache.queue}/>
    </div>)
  }
}

ReactDOM.render(<Foo cache={store.cache} />, document.querySelector('#root'));