
import React from 'react';
import { Link,useNavigate } from "react-router-dom";
import logo from '../assets/logo1.png'
import categos from '../assets/stripes.png'
// import { private_key } from './imports/imp';
import acc from '../assets/acc.png'
import csgo from '../assets/csgo.png'
import trade from '../assets/trade.png'
import league from '../assets/lol.jpg'
import fade from '../assets/fade.png'
import amazon from '../assets/amazon.png'
import pubg from '../assets/pubg.png'
import fortnite from '../assets/fortnine.png'
import crypto from '../assets/crypto.png'
import netflix from '../assets/netflix.png'
import fire from '../assets/fire.png'
import '../style/home.css'
// import search from '../assets/search.png'


let ok = []
let k = []
let i =0
let t =0
let intrvl = 0

function Home() {
  const jid = localStorage.getItem('jid')
  let height = window.innerHeight
  let width = window.innerWidth
  const [run,setrun] = React.useState(true)
  const [U,setU] = React.useState(true)
  let imgs = [csgo,league,pubg,crypto,amazon,netflix]

  const navigate = useNavigate();

  const first = React.useCallback(()=>{
    intrvl = setInterval(()=>{setU(i);live_swaps()}, 750);
    console.log(intrvl)
    clearInterval(intrvl-1)

  },[])

  React.useEffect(()=>{
    // first();
  },[first])

  
  

  // console.log(i)



  function live_swaps() {
    console.log('intlast',intrvl)
    if(ok.length == 200) {
      ok = []
    }

    
    if (i % 2 == 0) {
      // console.log(i,ok.length)
      let y = Math.floor((Math.random() * 800));
      let f = y.toString()[0]
      f = f-5 <= 0?f:f-5
      let l = 0
      if (f == 4 ||f==5) {
        l = Math.floor((Math.random() * 2)) +3
      }else if(f==3){
        l = Math.floor((Math.random() * 5))
      }else{
        l = Math.floor((Math.random() * 2))
      }
      ok.push(f.toString()+l.toString())
      t++
    }
    i++
  }

  function stop(){
    console.log('stop')
    if (run) {
      clearInterval(intrvl)
      clearInterval(intrvl-1)
      clearInterval(intrvl-2)
      clearInterval(intrvl-3)
    }else{
      intrvl = setInterval(()=>{setU(i);live_swaps()}, 750);
      // setU(3)
    }
    
    setrun(!run)
  }
  if(jid){
    return (
      <div className="body" style={{backgroundColor:'black',justifyContent:'center',display:'flex'}}>
          <div className="header" style={{height:70,width:width-20,alignSelf:'center',position:'absolute',top:10,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row'}} >
              <img src={logo} alt="" style={{height:80,width:180,position:'absolute',left:20}} />
              {/* <img src={categos} alt="" style={{height:30,width:30,position:'absolute',left:20}} /> */}
                <Link className="account" to="login" ><img src={acc} alt="" /></Link>
                {/* <Link className="account" to="login" ><img src={acc} alt="" /></Link> */}
                <div className="searchBox">
                    <input className="searchInput"type="text" name="" placeholder="Search"/>
                    <button className="searchButton" href="#">
                        {/* <img src={search} alt="" style={{height:18,width:18,}} /> */}
                    </button>
                </div>
          </div>
          <div onClick={stop} className="live-swaps" style={{height:height-100,width:'25%',backgroundColor:'white',position:'absolute',bottom:10,left:10,display:'flex',alignItems:'center',justifyContent:'center'}} >
          <img src={fade} style={{transform:'rotate(180deg)',position:'absolute',height:'60%',width:'100%',bottom:-10,zIndex:1}} />
              <h1 style={{position:'absolute',bottom:20,zIndex:2,color:'white',alignSelf:"center"}}  >{run?'live swaps':'stopped'}</h1>
              {/* <button style={{color:'white',fontFamily:'monospace',fontWeight:'bolder',padding:10,backgroundColor:'black',borderRadius:10,position:'absolute',top:10,left:10,borderWidth:0,zIndex:3}} type="submit" >stop</button> */}
              {ok.map((num,i)=>{
                // console.log(num)
                let f = num.toString()[0]
                let l = num.toString()[num.toString().length-1]
                // l = l- <= 0?l:l-5
                return(
                  <div key={i} className="trade" >
                    <img src={imgs[f]} />
                    <img style={{borderRadius:0,height:50,width:50,border:0}} src={trade} />
                    <img src={imgs[l]} />
                    {/* <p style={{position:'absolute',top:-30,color:'gray',fontFamily:"monospace",fontWeight:'bolder',fontSize:12}} >id: h9023fh4p502h452987g5f2o8g45f902</p> */}
                  </div>
                )
              })}
          </div>
          <div className="fire-deals" style={{height:height-100,width:(width*0.5)-10,borderRadius:13,backgroundColor:'white',position:'absolute',bottom:10,left:width*0.25+20}} >
            <div style={{flexDirection:'row',display:'flex',alignItems:'center',justifyContent:'start'}} >
              <h1 style={{fontSize:20,marginTop:20,marginRight:5,marginLeft:15}} >best seller shops</h1>
              <img src={fire} style={{height:25,width:25}} />
            </div>
          </div>
          <div className="smt1" style={{height:(height-100)/2-10,width:(width*0.25)-30,backgroundColor:'white',borderRadius:13,position:'absolute',bottom:(height-100)/2+20,left:width*0.75+20,display:'flex',alignItems:'center',flexDirection:'column'}} >
              <h1 style={{fontSize:20,marginTop:20,top:20}} >your offerings</h1>
              <p style={{fontSize:14,marginTop:10,fontFamily:'monospace',fontWeight:'bolder',color:'gray'}} >you have no offerings...</p>
              <button onClick={()=>{navigate('/make')}} className="createOffer" style={{padding:20,paddingTop:3,paddingBottom:3,borderRadius:13,backgroundColor:'#ffae00',border:0}}>
                <h2 style={{fontSize:14}} >add one</h2>
              </button>
          </div>
          <div className="smt2" style={{height:(height-100)/2,width:(width*0.25)-30,backgroundColor:'white',borderRadius:13,position:'absolute',bottom:10,left:width*0.75+20,display:'flex',alignItems:'center',flexDirection:'column'}} >
              <h1 style={{fontSize:20,marginTop:20,top:20}} >your swaps</h1>
              <p style={{fontSize:14,marginTop:10,fontFamily:'monospace',fontWeight:'bolder',color:'gray'}} >you have no swaps...</p>
              {/* <button className="createOffer" style={{padding:20,paddingTop:3,paddingBottom:3,borderRadius:13,backgroundColor:'#ffae00',border:0}}>
                <h2 style={{fontSize:14}} >add one</h2>
              </button> */}
          </div>
          
          {/* <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
          <img src={fade} alt="" style={{height:600,width:'100%',position:'absolute',zIndex:-1}} />
          <img src={ad} alt="" style={{height:400,width:720}} />
          </div> */}
      </div>
      
    );
  }else{
    return (
      <div className="body" style={{backgroundColor:'black',justifyContent:'center',display:'flex'}}>
          <div className="header" style={{height:70,width:width-20,alignSelf:'center',position:'absolute',top:10,justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row'}} >
              <img src={logo} alt="" style={{height:80,width:180}} />
              <img src={categos} alt="" style={{height:30,width:30,position:'absolute',left:20}} />
              <div style={{position:'absolute',right:20}} >
                <Link className="login" to="login" style={{fontSize:22,fontFamily:"monospace",fontWeight:'bolder',textDecoration:'none'}} >log in</Link>
                <Link className="regs" to="register" style={{fontSize:22,fontFamily:"monospace",fontWeight:'bolder',textDecoration:'none',paddingLeft:15,paddingRight:15,paddingTop:9,paddingBottom:9,borderRadius:6,marginLeft:17}} >sign up</Link>
               </div>
              
          </div>
          <h1 style={{position:'absolute',top:90,alignSelf:'center',zIndex:2,color:'white',alignSelf:"center"}}  >start swaping your accounts</h1>
          {/* <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
          <img src={fade} alt="" style={{height:600,width:'100%',position:'absolute',zIndex:-1}} />
          <img src={ad} alt="" style={{height:400,width:720}} />
          </div> */}
      </div>
      
    );
  }
  
}

export default Home;
