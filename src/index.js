// import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './app.js';
import rootReducer from './Reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import Footer from './Component/Footer'
import AddTodo from './Container/AddTodo'
import VisibleTodoList from './Container/VisibleTodoList'
import {Increment, Decrement} from './Action'
import {useSelector, useDispatch} from "react-redux";
import Login from "./Container/Login";
import DataGridDemo from './Component/DataGrid'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";


const App = () => (
  <div className="app-routes">
      <Router>
          <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={DataGridDemo} />
              <Redirect to="/" />
          </Switch>
      </Router>

  </div>
);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
