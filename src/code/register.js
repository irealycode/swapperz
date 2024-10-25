
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo1.png'
import '../style/register.css'
import axios from 'axios';

function Register() {
    const [email,setEmail] = React.useState('')
    const [name,setName] = React.useState('')
    const [pass,setPass] = React.useState('')
    const [Cpass,setCpass] = React.useState('')
    const [msg,setMsg] = React.useState('')

    const reg = async() =>{
        // console.log(name)
        const res = await axios.post('http://127.0.0.1:4242/register',{'email':email,'name':name,'password':pass})
        if (res.data === 'exists') {
            setMsg('email already used.')
        }
    }

  return (
    <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}} >
        <Link to="/" style={{alignSelf:'flex-start',marginLeft:20}} >
            <img src={logo} alt="" style={{height:80,width:180}} />
        </Link>
        <div className="loginForm" style={{width:300,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}} >
            <h1 className="title" style={{fontSize:32,textDecoration:'none',color:'black'}} >Register</h1>
            <h1 className="msg" style={{fontSize:13,textDecoration:'none',color:'black'}} >{msg}</h1>
            <input value={name} onChange={(event => setName(event.target.value))} className="fname" placeholder="Full Name" style={{paddingLeft:15,paddingTop:16,paddingBottom:16,width:'80%',borderRadius:0}} />
            <input type="email" value={email} onChange={(event => setEmail(event.target.value))} className="email" placeholder="Email" style={{paddingLeft:15,paddingTop:16,paddingBottom:16,width:'80%',borderRadius:0}} />
            <input type="password" value={pass} onChange={(event => setPass(event.target.value))} className="cpass" placeholder="Password" style={{paddingLeft:15,paddingTop:16,paddingBottom:16,width:'80%',borderRadius:0}} />
            <input type="password" value={Cpass} onChange={(event => setCpass(event.target.value))} className="pass" placeholder="Confirm Password" style={{paddingLeft:15,paddingTop:16,paddingBottom:16,width:'80%',borderRadius:0}} />
            <h1 onClick={()=>reg()} className="btnn" >next</h1>
        </div>
    </div>
  );
}

export default Register;
