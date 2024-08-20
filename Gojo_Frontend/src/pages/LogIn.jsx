import 'bootstrap/dist/css/bootstrap.css';
import "./auth.css"

function LogIn() {
  return (
    <div className ="wrapper">
        <div className ="logo">
            <img src="/gojo_logo.png" alt="logo"/>
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
            <button className ="btn mt-3">Login</button>
      </form>
      <div className="divider">
            <span>or</span>
          </div>
      <div className="google-btn">
            <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" width="40px" height="30px" style={{ borderRadius: "6px", margin: "0 3px" }} />
            <button>continue with Google</button>
          </div>
        <div className ="text-center fs-6">
            <p >Don&apos;t have an account? </p> <a href="#">Sign up</a>
        </div>
    </div>
  )
}

export default LogIn