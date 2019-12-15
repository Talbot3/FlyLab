/* eslint-disable react/no-multi-comp */

import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = bindKeyboard(virtualize(SwipeableViews));

const styles = {
  slide: {
    padding: 0,
    height: "100%",
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

function slideRenderer(params) {
  // if (global.window && styles.slide.minHeight !=  window.screen.availHeight) {
  //   styles.slide.height =  window.screen.availHeight-1;
  // }
  console.log(arguments);
  
  const { index, key } = params;
  let style;

  switch (mod(index, 3)) {
    case 0:
      style = styles.slide1;
      break;

    case 1:
      style = styles.slide2;
      break;

    case 2:
      style = styles.slide3;
      break;

    default:
      break;
  }

  return (
    <div style={Object.assign({}, styles.slide, style)} key={key}>
      {`slide n°${index + 1}`}
    </div>
  );
}

class DemoVirtualize extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    console.log(index)
    this.setState({
      index,
    });
  };

  handleClick = () => {
    this.setState({
      index: 0,
    });
  };

  render() {
    return (
        <VirtualizeSwipeableViews
          resistance
          style={{height: '100%'}}
          index={this.state.index}
          containerStyle={styles.slide}
          slideStyle={{height: '100%'}}
          onChangeIndex={this.handleChangeIndex}
          slideRenderer={slideRenderer}
          axis={"y"}
        />
    );
  }
}

export default DemoVirtualize;