import * as React from 'react';
import '../App.css';
import { getActiveItem } from '../reducers/';
import { connect, Component } from 'react-redux';
import { stateArg, AppProps, Action } from '../common/types';
import * as types from '../constants/ActionTypes';
const logo = require('../vlad.png');

class App extends React.Component<AppProps, {}> {
  render() {
    const { activeItem, onNextClick, onPreviousClick, nextDisabled, previousDisabled } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Vlad welcome to Redux!</h1>
        </div>
        <h2>
        When I use something I like to tell a story with it.
        Here I will tell a story about a famous man - Vlad Dracula.
        You can go to next part when you click on the arrow.
        </h2>
        <div className="App-controls-holder">
            <input 
                className="App-controls-previous-button button" 
                disabled={previousDisabled} 
                onClick={() => onPreviousClick()} 
                type="button" 
                value="&#x21E6;"  
            />
            <input 
                className="App-controls-next-button button" 
                disabled={nextDisabled} 
                type="button" 
                value="&#x21E8;" 
                onClick={() => onNextClick()} 
            />
            <div>
                {activeItem}
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: stateArg) => ({
  activeItem: getActiveItem(state),
  previousDisabled: !state.previousEnabled,
  nextDisabled: !state.nextEnabled
});

const mapDispatchToProps = (dispatch: (input: Action) => void  ) => {
  return {
    onNextClick: () => {
      dispatch({
        type: types.NEXT_ITEM
      });
    },
    onPreviousClick: () => {
      dispatch({
        type: types.PREVIOUS_ITEM
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App as Component<AppProps>);