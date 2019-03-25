import React from 'react';
import imgLogo from '../../assets/img/logo.png';

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return <div class="sufee-login d-flex align-content-center flex-wrap">
                    <div class="container">
                        <div class="login-content">
                            <div class="login-logo">
                                <a href="index.html">
                                    <img class="align-content" src={imgLogo} alt="" />
                                </a>
                            </div>
                            <div class="login-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="form-group">
                                        <label>Username</label>
                                        <input type="text" class="form-control" placeholder="Username" onChange={this.handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control" placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    {/* <div class="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                        </label>
                                        <label class="pull-right">
                                            <a href="#">Forgotten Password?</a>
                                        </label>
                                    </div> */}
                                    <button type="submit" class="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                    {/* <div class="register-link m-t-15 text-center">
                                        <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default Login;