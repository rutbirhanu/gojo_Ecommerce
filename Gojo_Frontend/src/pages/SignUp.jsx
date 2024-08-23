import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { register } from '../redux/authSlice';


function SignUp() {
  const dispatch= useDispatch()

  const [formValue, setFormValue] = useState({
    email: "",
    password:""
  })
  const onChange = (e) => {
    setFormValue({...formValue, [e.target.name]:e.target.value})
  }

  const handleSignUp = (e) => {
    e.preventDetfault()
    dispatch(register(formValue))
  }
  
  return (
    <div className ="wrapper">
    <div className ="logo">
      <h3>Welcome</h3>
    </div>
   
    <form className ="p-3 mt-3">
        <div className ="form-field d-flex align-items-center">
            <span className ="far fa-user"></span>
            <input type="email" name="email" id="email" placeholder="Email" onChange={onChange} />
        </div>
        <div className ="form-field d-flex align-items-center">
            <span className ="fas fa-key"></span>
            <input type="password" name="password" id="pwd" placeholder="Password" onChange={onChange} />
        </div>
        <button className ="btn mt-3" onChange={handleSignUp}>SignUp</button>
  </form>
  <div className="divider">
        <span>or</span>
      </div>
  <div className="google-btn">
        <img src="/google.png" width="25px" height="26px" style={{ borderRadius: "6px", margin: "0 3px" }} />
        <button>Continue with Google</button>
      </div>
    <div className ="text-center fs-6">
        <p >Already have account? </p> <a href="/login">Login</a>
    </div>
  </div>
  )
}

export default SignUp