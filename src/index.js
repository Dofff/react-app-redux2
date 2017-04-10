import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';
import * as actions from './actions';

const store = createStore(reducers);

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// subscribe 스토어의 변화가 있을때마다 실행
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));
//
// unsubscribe(); // unsubscribe 더이상 실행 x
// store.dispatch(actions.setColor([210, 210, 210]));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
    document.getElementById('root')
);
