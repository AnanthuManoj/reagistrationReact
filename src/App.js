import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [userName , setUserName] = useState('')
  const [isUserName ,setIsUserName] = useState(true)
  const [email,setEmail] = useState('')
  const [isEmail , setIsEmail] = useState(true)
  const [password,setPassword] = useState('')
  const [isPassword,setIspassword] = useState(true)
 

  const getValidatedName=(evnt)=>{
      const {value} = evnt.target
       if(value.match(/^[A-Za-z]+$/)){
          setUserName(value)
          setIsUserName(true)
          console.log(value);
       }else{
        setUserName(value)
        setIsUserName(false)
       }
  }

  const getvalidatedEmail=(evnt)=>{
    const {value} = evnt.target
    if(value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      setEmail(value)
      setIsEmail(true)
    }else{
      setEmail(value)
      setIsEmail(false)
    }
  }

  const getvalidatedPassword=(evnt)=>{
    const {value} = evnt.target 
    if(value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)){
       setPassword(value)
       setIspassword(true)
    }else{
      setPassword(value)
      setIspassword(false)
    }
  }

  const  handleSubmit=(evnt)=>{
    evnt.preventDefault();
    if(userName&&email&&password){
      alert(`${userName} your registration has been successfull`)
      setEmail('')
      setUserName('')
      setPassword('')
    }else{
      alert("Please fill all fields correctly")
    }
  }

    

  return (
    <div className="App">
        <div className="container">
              <div className='form-box'>
              <h1 className='text-center fw-bold mb-3 text-white'>Registration</h1>
                <form onSubmit={handleSubmit} >
                  <label htmlFor="uname" >Name: </label><br/>
                  <input name='uname' autoComplete='off' onChange={(evnt)=>getValidatedName(evnt)} value={userName} id='uname' type="text" style={!isUserName?{border:'2px solid red'}:{outlineColor:'2px solid green'}}/><br/>
                  {!isUserName&&
                  <div className='d-flex flex-start'>
                      <p className='text-warning fw-bold ms-3'>Invalid Name</p>
                  </div>}
                  <label htmlFor="email"  >Email: </label><br/>
                  <input name='email' id='email' autoComplete='off' style={!isEmail?{border:'2px solid red'}:{outlineColor:'2px solid green'}} onChange={(evnt)=>getvalidatedEmail(evnt)} value={email}   type="text"/><br/> 
                  {!isEmail&&
                  <div className='d-flex flex-start'>
                      <p className='text-warning fw-bold ms-3'>Invalid Email</p>
                  </div>}
                  <label htmlFor="password" >Password: </label><br/>
                  <input name='password' id='password' autoComplete='off' onChange={(evnt)=>{getvalidatedPassword(evnt)}} value={password} style={!isPassword?{border:'2px solid red'}:{outlineColor:'2px solid green'}} type="password"/>
                
                  <br/>


                  {!isPassword&&
                  <div className='d-flex flex-start'>
                      <p className='text-warning fw-bold ms-3'>invalid password</p>
                  </div>}

                  <button className='btn btn-outline-light mt-3' disabled={isUserName&&isEmail&&isPassword?false:true} type="submit">Register</button>
                </form>
              </div>
        </div>
    </div>
  );
}

export default App;
