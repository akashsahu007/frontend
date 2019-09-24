import React,{Component} from 'react';

class TodoApp extends Component {
    render()
    {
        return(
            <div className="TodoApp">
                <LoginComponent/>
               
            </div>
        
        )
    }
}
class LoginComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state={user:'scott',password:''};
        this.handleChange=this.handleChange.bind(this);
        this.loginclicked=this.loginclicked.bind(this);
    }
    
    handleChange(event)
    {
        console.log(this.state);
        this.setState(
            {
                [event.target.name] : event.target.value
            }
            )

    }
    loginclicked(event)
    {
        console.log(this.state);
        

    }

    
   
    render(){
        return(
            <div>
                
            User Name:<input type='text' name="User" value={this.state.username} onChange={this.handleChange}/>
            Password:<input type='password' name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginclicked}>login</button>
            
            </div>
        );
    }
}
export default TodoApp