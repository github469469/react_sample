import React from 'react'
import'./Banklogin.css'


class Bankapplogin extends React.Component {

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

           

        return <div className="banklogin">

              
            <form onSubmit ={this.handleSubmit} ng> 
            <div class="container">

            <h1>Welcome to Federal Bank</h1>

            {/* <h2>Username:{this.state.username}</h2> */}
                {/* <h2>password:{this.state.password}</h2> */}
            


            <div class="mb-3"> 
            <label for="accountnumber" class="form-label">Account number</label>
            <br></br>
                <input type="text"  onChange={this.usernameChange} class="form-label" name="username"></input>
                </div>


                <div class="mb-3"> 
                <label for="Password" class="form-label">Password</label>
                <br></br>
                <input type="text" onChange={this.passwordChange}class="form-label"  name="password"></input>
                </div>

                <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
          <a href="">sign up</a>
         
            </div>

                <button type="submit" class="btn btn-primary" name="submit">Submit</button>
                <a href="register">registration</a>


           
        </div>
        </form>
        </div>
    }

}

export default Bankapplogin;
