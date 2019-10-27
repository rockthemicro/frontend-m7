import React from 'react';
import axios from 'axios';
import '../style/Login.css';


class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);

        this.state = {
            userName: "",
            password: ""
        }
    }

    handleLogin = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/api/login?userName=' + this.state.userName + '&password=' + this.state.password;
        axios.get(url)
            .then((response) => {
                if (response.data === "OK")
                    this.props.changePage(2);
                else
                    alert("Invalid user and/or password");
            })
            .catch(() => {
                alert('Could not send request')
            });

    }

    handleSignup = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/api/signup?userName=' + this.state.userName + '&password=' + this.state.password;
        axios.get(url)
            .then(response => {
                if (response.data === "OK")
                    alert("User successfully created");
                else
                    alert("Could not create this user");
            })
            .catch(() => {
                alert('Could not send request')
            });

    }

    updateInputValueUserName = (event) => {
        this.setState({userName: event.target.value});
    }

    updateInputValuePassword = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (

            <div className='login'>
                <form className='loginForm'>
                    <div className='loginInput'>
                        <label className='label'>User:</label>
                        <input className='loginBox' onChange={this.updateInputValueUserName}/>
                    </div>
                    <div className='loginInput'>
                        <label className='label'>Parola:</label>
                        <input className='loginBox' type="password" onChange={this.updateInputValuePassword}/>
                    </div>
                    <button className='loginButton' onClick={this.handleLogin}>Login</button>
                </form>

                <div className='message'>Inca nu ai un cont?</div>

                <form className='signUpForm'>
                    <div className='signUpInput'>
                        <label className='label'>Nume*: </label>
                        <input className='signUpBox'/>
                    </div>
                    <div className='signUpInput'>
                        <label className='label'>Prenume*: </label>
                        <input className='signUpBox'/>
                    </div>
                    <div className='signUpInput'>
                        <label className='label'>User*: </label>
                        <input className='signUpBox' onChange={this.updateInputValueUserName}/>
                    </div>
                    <div className='signUpInput'>
                        <label className='label'>Parola*: </label>
                        <input className='signUpBox' type="password" onChange={this.updateInputValuePassword}/>
                    </div>
                    <button className='signUpButton' onClick={this.handleSignup}>Sign Up</button>
                </form>
            </div>
        )
    }

}

export default Login;