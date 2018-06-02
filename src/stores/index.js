import {createStore,combineReducers} from 'redux';
import reducer from 'reducers';
const store = createStore(
    combineReducers(reducer),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
window.store = store;
export default store;