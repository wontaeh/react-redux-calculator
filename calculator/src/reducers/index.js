import { combineReducers } from 'redux';
import calculatorReducer from './calculatorReducer';

const reducers = {
  state: calculatorReducer,
};

export default combineReducers(reducers);