import React from 'react';
import SwipeableViews from 'react-swipeable-views';

export default class Swiper extends React.Component {
  state = {
    slideContainer: {
      height: "100%",
      width: "100%",
      backgroundColor: '#FEA900'
    },
    slide: {
      height: "100%",
      width: "100%",
      color: '#fff',
    },
    slide1: {
      // width: "100%",
      // y: "100%",
      backgroundColor: '#FEA900',
    },
    slide2: {
      height: 720,
      backgroundColor: '#B3DC4A',
    },
    scroll: {
      // height: 300,
      // backgroundColor: '#B3DC4C',
    },
    slide3: {
      // height: 300,
      backgroundColor: '#6AC0FF',
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({slide: Object.assign({},this.state.slide1,{
        heigth: window.screen.height
      })});
      this.setState({slide1: Object.assign({},this.state.slide1,{
        heigth: window.screen.height
      })});
      console.log('screen', window.screen.height);
    }, 1000);
  }


  render() {
    console.log("render", this.state.slide.height);
    return (
      <SwipeableViews containerStyle={this.state.slideContainer} axis="y" resistance style={{height: "100%"}}>
        <div style={this.state.slide1}>slide n°1</div>
        <div style={this.state.slide2}>slide n°2</div>
        <div style={this.state.slide3}>slide n°3</div>
        
      </SwipeableViews>
    );
  }
};