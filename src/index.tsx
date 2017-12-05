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
  items: ["Vlad hated beggars and lazi mans.",
    "One day Vlad announced that he  will give a great feast to all beggars and wanderers.",
    "Every scum was gathered from all over the country.",
    "They all received free food and alcohol drinks in a wooded house.",
    "When they get drunk Vlad appears with his servants and asked them are they want never be poor. ",
    "When they answered 'Yes master'! Vlad ordered all doors on house to be nailed and house to be set on fire.",
    "No one survived."]
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
