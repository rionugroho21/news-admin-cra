import React from 'react';
import imgLogo from '../../assets/img/logo.png';

class Login extends React.Component{
    state = {
        username: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        return <div className="sufee-login d-flex align-content-center flex-wrap">
                    <div className="container">
                        <div className="login-content">
                            <div className="login-logo">
                                <a href="index.html">
                                    <img className="align-content" src={imgLogo} alt="" />
                                </a>
                            </div>
                            <div className="login-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="Username" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    {/* <div className="checkbox">
                                        <label>
                                            <input type="checkbox" /> Remember Me
                                        </label>
                                        <label className="pull-right">
                                            <a href="#">Forgotten Password?</a>
                                        </label>
                                    </div> */}
                                    <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                                    {/* <div className="register-link m-t-15 text-center">
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