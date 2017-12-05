import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { stateArg } from './common/types';

const INITIAL_STATE: stateArg = {
  activeIndex: 0,
  items: [ 1,2,3,4,5,6,7,8,9 ]
};

const store = createStore(
  reducer,
  INITIAL_STATE
);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
