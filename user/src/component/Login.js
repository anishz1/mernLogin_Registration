import React,{useState} from 'react'
import './Login.css';
const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginUser= async (e)=>{
        e.preventDefault();
        
        const res= await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });
       const data= res.json();
       if(res.status===400||!data){
        window.alert("Invalid Credentials");
       }else{
        window.alert("Login Successful");
       }
        
    }
    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form method='POST'>
                    <div className="user-box">
                        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor='name'>Email adress/Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <label htmlFor='password'>Password</label>
                    </div>

                    <div className='formbutton' style={{display:"inline" , marginRight:"15px"}}>
                        <input type="submit" name="signup"placeholder="LOGIN" required="" value="Login In" onClick={loginUser } />
                    </div>
                   <h1 style={{color:"#3b2abd", display:"inline" ,fontSize:"15px", cursor:"pointer"}}>New User Register now</h1>
                     
                    {/* <a href="/">Log in</a>
                <a href="/">Register</a> */}
                </form>
            </div>
        </>
    )
}

export default Login