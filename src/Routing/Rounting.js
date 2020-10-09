import React from "react";
import Login from '../Component/LoginForm.js'
import DataGridDemo from '../Component/DataGrid.js'
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

export default App