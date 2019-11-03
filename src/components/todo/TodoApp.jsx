import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import HeaderComponent from './HeaderComponent';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/login" component={LoginComponent} />
              <Route path="/" exact component={LoginComponent} />
              <AuthenticatedRoute path="/welcome/:name" component={Welcome} />
              <AuthenticatedRoute path="/todo" component={ListTodoComponent} />
              <Route path="/logout" component={logoutComponent} />
              <Route component={error} />
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}
class FooterComponent extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">
            All rights reserved 2019 @Quirky Labs
          </span>
        </footer>
      </div>
    );
  }
}
class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        { id: 1, description: 'TATA Motor' },
        { id: 2, description: 'MRF' },
        { id: 3, description: 'M&M' }
      ]
    };
  }
  render() {
    return (
      <>
        <h1>Portfolio</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Scrip</th>
                <th>Current price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todo.map(todos => (
                <tr key={todos.id}>
                  <td>{todos.id}</td>
                  <td>{todos.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'tom',
      password: '',
      loginsuccess: false,
      invalidcred: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginclicked = this.loginclicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginclicked(event) {
    if (this.state.username === 'tom' && this.state.password === 'tom') {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      /*this.setState({ loginsuccess: true });*/
      /*this.setState({ invalidcred: false });*/
      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({ loginsuccess: false });
      this.setState({ invalidcred: true });
    }
  }

  render() {
    return (
      <div className="container">
        {/*<Invalidcredcheck invalidcred={this.state.invalidcred} />*/}
        {this.state.invalidcred && (
          <div className="alert alert-warning">Invalid creds</div>
        )}
        {this.state.loginsuccess && <div>login success</div>}
        User Name:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="btn btn-success" onClick={this.loginclicked}>
          login
        </button>
        {/*<Loginsuccessmsg loginsuccess={this.state.loginsuccess} />*/}
      </div>
    );
  }
}

// function Invalidcredcheck(props)
// {
//     if(props.invalidcred){
//         return <div>Invalid creds</div>
//     }
//     else
//      return null
// }

// function Loginsuccessmsg(props)
// {
//     if(props.loginsuccess){
//         return <div>login success</div>
//     }
//     else
//      return null
// }

class Welcome extends Component {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <div className="container">
          welcome {this.props.match.params.name} . to manage todo click{' '}
          <Link to="/todo"> here</Link>
        </div>
      </>
    );
  }
}

function error() {
  return <div>page not found , fuck off!!</div>;
}
class logoutComponent extends Component {
  render() {
    return (
      <div>
        <h1>login out ......</h1>
        <div className="container">thank you , see you soon.</div>
      </div>
    );
  }
}
export default TodoApp;
