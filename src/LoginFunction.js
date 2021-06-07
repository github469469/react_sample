
import React, {useState} from 'react';
import Sample from './Sample'
import SampleClass from'./SampleClass'
import { useHistory } from "react-router-dom";



function LoginFunction(){
    const names = ["name1","name2","name3","name4"]
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();


    const usernameChange=(event)=>{

        setUsername(event.target.value)
    }

    const passwordChange=(event)=>{

         setPassword(event.target.value)
    }




    const handleSubmit= (event)=>{
        event.preventDefault();
            history.push("/login")

    }

    return <div className="login">

    <h1>Login Function</h1>
    <h2>Username:{username}</h2>
    <h2>Password:{password}</h2>
    {

     names.map(name=><h1>{name}</h1>)


    }

    <Sample name={username}/>

    <Sample name="user1"/>
    <Sample name="user2"/>
    <Sample name="user3"/>

    <SampleClass name="user3"/>

    
    <form onSubmit ={handleSubmit}>
        <input onChange={usernameChange} type="text" name="username"></input>
        <input onChange={passwordChange} type="password" name="password"></input>
        <input class="btn btn-primary" type="submit" name="submit"></input>



    </form>
</div>


}
export default LoginFunction;