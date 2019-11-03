import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component {
  render() {
    const isUserLoggedin = AuthenticationService.isUserLogdin();
    console.log(isUserLoggedin);
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="navbar-brand">Quirky Labs</div>
          <ul className="navbar-nav">
            {isUserLoggedin && (
              <li className="nav-link">
                <Link to="/welcome/tom">Home</Link>
              </li>
            )}
            {isUserLoggedin && (
              <li className="nav-link">
                <Link to="/todo">todo</Link>
              </li>
            )}
            {isUserLoggedin && (
              <li className="nav-link">
                <Link to="/todo">My stocks</Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">
              <Link to="/login">Login</Link>
            </li>
            {isUserLoggedin && (
              <li className="nav-link">
                <Link to="/logout" onClick={AuthenticationService.logout}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <hr />
      </header>
    );
  }
}
export default withRouter(HeaderComponent);
