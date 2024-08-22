import 'bootstrap/dist/css/bootstrap.css';
import "./auth.css"

function LogIn() {
  return (
 
    <div className ="wrapper">
        <div className ="logo">
          <h3>Login</h3>
        </div>
       
        <form className ="p-3 mt-3">
            <div className ="form-field d-flex align-items-center">
                <span className ="far fa-user"></span>
                <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className ="form-field d-flex align-items-center">
                <span className ="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" />
            </div>
            <button className ="btn mt-3">Continue</button>
      </form>
      <div className="divider">
            <span>or</span>
          </div>
      <div className="google-btn">
            <img src="/google.png" width="25px" height="26px" style={{ borderRadius: "6px", margin: "0 3px" }} />
            <button>Continue with Google</button>
          </div>
        <div className ="text-center fs-6">
            <p >Don&apos;t have an account? </p> <a href="/sign-up">Sign up</a>
        </div>
      </div>
  )
}

export default LogIn