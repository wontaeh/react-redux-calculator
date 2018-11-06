import { createStore } from 'redux';
import combinedReducers from './reducers';

export default function configureStore(initialState={}) {
 return createStore(
  combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
 );
}
