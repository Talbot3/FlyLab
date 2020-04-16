import React, {Component} from 'react';
import AutoSize from 'frc-auto-size';
import NoSSR from 'react-no-ssr';
export default class Test extends Component{
	render(){
		return (
			<Parent>
        <Child />
        <NoSSR>
          <AutoSize checked={true}>{function({width, height}) {
            return (<div style={{width, height}}>wahaha</div>)
          }}</AutoSize>
        </NoSSR>
			</Parent>
		)
	}
}

class Parent extends Component {
	constructor(){
		super();
		this.state = {
			count: 1
		};
	}
	getChildren(){
		const _this = this;
		let { children } = _this.props;
		return React.Children.map(children, child => {
			return React.cloneElement(child, {
				count: _this.state.count
			});
		});
	}
	handleClick= ()=> {
    // console.log(this.state.count);
		this.setState({
			count: ++this.state.count
		});
	}
	render(){
		return (
			<div>
				<button onClick={ this.handleClick.bind(this) }>点击增加次数</button>
				{ this.getChildren() }
			</div>
		)
	}
}
class Child extends Component{
	render(){
		return (
			<div>
				这是子组件：{ this.props.count }
			</div>
		)
	}
}
