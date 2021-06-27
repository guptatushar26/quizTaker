import './index.css'
import React from 'react'

class LoginPage extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <form class="box">
                                <h1>Login</h1>
                                <p class="text-muted">Please Enter Your Login Details</p>
                                <input type="text" name="" placeholder="Username"/> 
                                <input type="password" name="" placeholder="Password"/> 
                                <a class="forgot text-muted" href="#">Forgot password?</a> 
                                <input type="submit" name="" value="Login" href="#"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;