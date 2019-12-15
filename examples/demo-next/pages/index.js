import React from 'react';
import Game from '../components/Game';
import Toggle from '../components/Toggle';
import LoggingButton from '../components/LoggingButton';
import NumberList from '../components/NumberList';
import Blog from '../components/Blog';
import Nameform from '../components/Nameform';
import EssayForm from '../components/EssayForm';
import FlavorForm from '../components/FlavorForm';
import Reservation from '../components/Reservation';
import Calculator from '../components/Calculator';
import WelcomDialog from '../components/WelcomDialog';
import App from '../components/App';
import FilterableProductTable from '../components/FilterableProductTable';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      posts: [
        { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
        { id: 2, title: 'Installation', content: 'You can install React from npm.' },
      ],
    };
  }

  render() {
    return (
      <div>
        <Game />
        <Toggle />
        <LoggingButton />
        <NumberList numbers={this.state.numbers} />
        <Blog posts={this.state.posts} />
        <Nameform />
        <EssayForm />
        <FlavorForm />
        <Reservation />
        <Calculator />
        <WelcomDialog />
        <App />
        <FilterableProductTable />
      </div>
    );
  }
}
