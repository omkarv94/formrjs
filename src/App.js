import './App.css';
import profile from "./images/login.png";
import email from "./images/email";
import password from "./images/password.png"; 

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div className='conatiner-fluid'>
            <div className='contain-profile'>
              <img src={profile} alt="profile" className="profile"/>
            </div>
        </div>
        <div className='conatiner'>
            <h2>Login Page</h2>
            <div className='em'>
              <span><img src={email} alt="email" className="email"/></span>
              <span><input type='text' placeholder='Username' className='name'></input></span>
            </div>
            <div className='pass'>
            <span><img src={password} alt="password" className="password"/></span>
            <span><input type='text' placeholder='Password' className='name'></input></span>
            </div>
            <div className='login-button'>
              <button>Login</button>
            </div>
            <div className='link'>
              <span><a href='#'>Forgot Password  </a></span>
              <span>or</span>
              <span><a href='#'>  Sign Up</a></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
