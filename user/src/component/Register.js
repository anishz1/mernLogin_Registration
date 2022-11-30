import React,{useState} from 'react'
// import {Navlink,useHistory,createBrowserHistory} from 'react-router-dom';
import './Login.css';
const Register = () => {
    // const history=createBrowserHistory();
    const [user,setUser]= useState({
        name:"",email:"",number:"",password:"",cpasword:""
    });

    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData=async(e)=>{
        e.preventDefault();

        const { name ,email ,number ,password ,cpasword }=user;
       const res = await fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name ,email ,number ,password ,cpasword 
        })
       });
       const data=await res.json();
       if(DataTransfer.status===422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
       }
       else{
        window.alert("Registeration successful");
        console.log("Successfull Registeration");

        // history.push("/login");
       }
       
    }
    return (
        <>
            <div className="login-box">
                <h2>Register</h2>
                <form method='POST'>
                    <div className="user-box">
                        <input type="text" name="name" value={user.name} onChange={handleInputs}/>
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className="user-box">
                        <input type="email" name="email" value={user.email} onChange={handleInputs}/>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text" name="number" value={user.number} onChange={handleInputs}/>
                        <label htmlFor='number'>Number</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={user.password} onChange={handleInputs}/>
                        <label htmlFor='password'>Password</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="cpasword"value={user.cpasword} onChange={handleInputs}/>
                        <label htmlFor='cpasword'>Confirm Password</label>
                    </div>

                    
                    <div className='formbutton' style={{display:"inline" , marginRight:"15px"}}>
                        
                        <input type="text" placeholder="REGISTER"name="signup" required="" value="register" onClick={PostData} />
                        
                    </div>
                   <h1 style={{color:"#3b2abd", display:"inline" ,fontSize:"15px", cursor:"pointer"}}>Already Have Account</h1>
                      
                    {/* <a href="/">Register</a> */}
                    {/* <a href="/">LOGIN</a> */}
                </form>
            </div>
        </>
    )
}

export default Register