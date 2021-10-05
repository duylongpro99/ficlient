import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory' 
import thunk from 'redux-thunk';

export const history = createHistory();

const initialStates = {};
const enhancers = [];

const middleware = [
    thunk,
    routerMiddleware(history)
]

