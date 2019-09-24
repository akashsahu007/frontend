import React,{Component} from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'

class TodoApp extends Component {
    render()
    {
        return(
            <div className="TodoApp">
                
                <Router>
                <> 
                    <Switch>

                            <Route path="/login" component={LoginComponent}/>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/welcome/:name" component={Welcome}/>
                            <Route component={error}/>
                    </Switch>
                </>

                </Router>
               
            </div>
        
        )
    }
}
class LoginComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={username:'tom',password:'',loginsuccess: false, invalidcred: false};
        this.handleChange=this.handleChange.bind(this);
        this.loginclicked=this.loginclicked.bind(this);
    }
    
    handleChange(event)
    {
        
        this.setState(
            {
                [event.target.name] : event.target.value
            }
            )

    }
    loginclicked(event)
    {
        
        if(this.state.username==="tom" && this.state.password==="tom")
        {
            this.setState({loginsuccess: true})
            this.setState({invalidcred: false})
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else
        {
            this.setState({loginsuccess: false})
            this.setState({invalidcred: true})
        }
        console.log(this.state);

    }

    
   
    render(){
        return(
            <div>
                {/*<Invalidcredcheck invalidcred={this.state.invalidcred} />*/}
                {this.state.invalidcred && <div>Invalid creds</div>}
                {this.state.loginsuccess && <div>login success</div>}
            User Name:<input type='text' name="username" value={this.state.username} onChange={this.handleChange}/>
            Password:<input type='password' name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginclicked}>login</button>
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

class Welcome extends Component{

    render(){
        return(
            <div>welcome {this.props.match.params.name} </div>
        );
    }
}

function error()
{
    return(
        <div>page not found , fuck off!!</div>
    );
    
}
export default TodoApp