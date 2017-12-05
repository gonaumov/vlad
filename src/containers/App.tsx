import * as React from 'react';
import '../App.css';
import { Dispatch } from 'redux';
import { getActiveItem } from '../reducers/';
import { connect, Component } from 'react-redux';
import { stateArg } from '../common/types';
import * as types from '../constants/ActionTypes';

const logo = require('../logo.svg');

class App extends React.Component<any, any> {
  render() {
    const { activeItem, onChangeItemClick } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
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
        <input type="button" value="&#x21E8;" onClick={() => onChangeItemClick()} />
      </div>
    );
  }
}

const mapStateToProps = (state: stateArg) => ({
  activeItem: getActiveItem(state)
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onChangeItemClick: () => {
      dispatch({
        type: types.CHANGE_ACTIVE_ITEM
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App as Component<any>);