import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Router } from 'react-router-dom';
import configureStore from './redux-modules/Create';
import history from './views/global/BrowserHistory';
import ApiHost from './routes/ApiHost';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

let initialState = 'Sehatq Fandi';
initialState = window.DATA;
const client = new ApiHost();
const store = configureStore(client, initialState);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Router history={history}>
          <App initialData={window.DATA} />
        </Router>
      </BrowserRouter>
    </Provider>, document.getElementById('root'),
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
