import * as React from 'react';
import '../App.css';
import {Dispatch} from 'redux'
import { getActiveItem } from '../reducers/'
import { connect, Component } from 'react-redux'
import {stateArg} from '../common/types'

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
        <div>
          {activeItem}
        </div>
        <input type="button" value="change" onClick={() => onChangeItemClick()} />
      </div>
    );
  }
}

const mapStateToProps = (state: stateArg) => ({
  activeItem: getActiveItem(state)
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    onChangeItemClick: () => {
      dispatch({
        type: 'CHANGE_ACTIVE_ITEM'
      })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App as Component<any>)