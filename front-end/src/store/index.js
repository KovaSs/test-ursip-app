import { createStore, applyMiddleware } from 'redux';
import reducers from '../redusers';
import api from '../middlewares/api';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const devToolsCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(reducers, devToolsCompose(applyMiddleware(thunk, logger, api)))

export default store