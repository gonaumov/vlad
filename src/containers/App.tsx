import * as React from 'react';
import '../App.css';
import { Dispatch } from 'redux';
import { getActiveItem } from '../reducers/';
import { connect, Component } from 'react-redux';
import { stateArg } from '../common/types';
import * as types from '../constants/ActionTypes';
const logo = require('../vlad.png');


class App extends React.Component<any, any> {
  render() {
    const { activeItem, onNextClick, onPreviousClick, nextDisabled, previousDisabled } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Vlad welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        When I start something I like to tell a story with it. 
        Here I will tell a story about a famous man - Vlad drakula. 
        You can go to next part when you click on the arrow. 
        <div>
          <hr/>
          {activeItem}
          <hr/>
        </div>
        <input disabled={previousDisabled} type="button" value="&#x21E6;" onClick={() => onPreviousClick()} />
        <input disabled={nextDisabled} type="button" value="&#x21E8;" onClick={() => onNextClick()} />
      </div>
    );
  }
}

const mapStateToProps = (state: stateArg) => ({
  activeItem: getActiveItem(state),
  previousDisabled: !state.previousEnabled,
  nextDisabled: !state.nextEnabled
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
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
)(App as Component<any>);