import React from 'react'
import'./Login.css'


class Login extends React.Component {

    state = {

        username: '',
        password: ''
    }


    usernameChange = (event) => {

        this.setState({

            username: event.target.value
        })
    }
    passwordChange = (event) => {

        this.setState({

            password: event.target.value
        })
    }
        handleSubmit =(event)=>{

            alert("Username:"+this.state.username)
            alert("password:"+this.state.password)

        }
        


        render() {

        return <div className="login">

            <h1>Login</h1>
            <h2>Username:{this.state.username}</h2>
            <h2>password:{this.state.password}</h2>
            <form onSubmit ={this.handleSubmit}>
                <input onChange={this.usernameChange} type="text" name="username"></input>
                <input onChange={this.passwordChange} type="password" name="password"></input>
                <input class="btn btn-primary" type="submit" name="submit"></input>



            </form>
        </div>
    }

}

export default Login;
