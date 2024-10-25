
import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import logo from '../assets/white_logo.png'
import '../style/login.css'
import axios from 'axios';

function Login() {
    const [email,setEmail] = React.useState('')
    const [pass,setPass] = React.useState('')
    const [msg,setMsg] = React.useState('')
    const navigate = useNavigate();


    const login = async() =>{
        // console.log(name)
        const res = await axios.post('http://192.168.1.5:4242/login',{'email':email,'password':pass})
        if (res.data === 'no' || res.data === '505') {
            setMsg('wrong email or password.')
        }else{
            setMsg('')
            localStorage.setItem("jid", res.data)
            navigate('/')
        }
    }


  return (
    <div className="login-body" style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}} >
        <Link to="/" style={{alignSelf:'flex-start',marginLeft:20}} >
            <img src={logo} alt="" style={{height:80,width:180}} />
        </Link>
        <div className="loginForm" style={{width:300,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}} >
            <h1 className="title" style={{fontSize:32,textDecoration:'none',color:'black'}} >Login</h1>
            {/* <h1 className="msg" style={{fontSize:13,textDecoration:'none',color:'black'}} >{msg}</h1> */}
            <input type="email" value={email} onChange={(event => setEmail(event.target.value))} className="email" placeholder="Email" style={{paddingLeft:15,paddingTop:16,paddingBottom:16,width:'80%',borderRadius:0}} />
            <input type="password" value={pass} onChange={(event => setPass(event.target.value))} className="pass" placeholder="Password" style={{paddingLeft:15,paddingTop:16,paddingBottom:16,width:'80%',borderRadius:0}} />
            <h1 onClick={()=>login()} className="btnn" >next</h1>
        </div>
    </div>
  );
}

export default Login;
