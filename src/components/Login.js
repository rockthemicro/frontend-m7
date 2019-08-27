import React from 'react';
import axios from 'axios';
import '../style/Login.css';


class Login extends React.Component {


    handleLogin = () => {

        /*
        let url = 'http://192.168.4.1:80/api/muie/muie?param=3';
        axios.get(url, {})
            .then(response => {
                alert('ok');
            })
            .catch(() => {alert('Not OK')});
            */

        this.props.changePage(2);
    }

    render() {
        return (

            <div className='login'>
                <form className='loginForm'>
                    <div className='loginInput'>
                        <label className='label'>User:</label>
                        <input className='loginBox'/>
                    </div>
                    <div className='loginInput'>
                        <label className='label'>Parola:</label>
                        <input className='loginBox' type="password"/>
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
                        <input className='signUpBox'/>
                    </div>
                    <div className='signUpInput'>
                        <label className='label'>Parola*: </label>
                        <input className='signUpBox' type="password"/>
                    </div>
                    <button className='signUpButton' onClick={this.handleLogin}>Sign Up</button>
                </form>
            </div>
        )
    }

}

export default Login;