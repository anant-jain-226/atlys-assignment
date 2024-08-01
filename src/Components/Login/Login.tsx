import React, { Dispatch, SetStateAction, useState } from "react";
import showPasswordIcon from "../../assets/images/showPassword.png";
import closeIcon from "../../assets/images/close.png";
import { useNavigate, useLocation } from "react-router-dom";

interface ILoginProps {
  isLoginVisible: boolean;
  setShowAuth: Dispatch<SetStateAction<boolean>>;
}
const Login: React.FC<ILoginProps> = ({ isLoginVisible, setShowAuth }) => {
  const [showLogin, setShowLogin] = useState(isLoginVisible);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {showLogin ? (
        <div className="login-cont">
          <div className="post login">
            {location.pathname === "/home" && (
              <div className="close-modal" onClick={() => setShowAuth(false)}>
                <img src={closeIcon} alt="icon" />
              </div>
            )}
            <div className="heading">
              <div>WELCOME BACK</div>
              <div>Log into your account</div>
            </div>
            <div>Email or Username</div>
            <div>
              <div className="input grey-text">
                Enter your email or username
              </div>
            </div>
            <div className="space-between">
              <div>Password</div>
              <div>Forgot password?</div>
            </div>
            <div className="space-between input grey-text">
              <div >Enter your password</div>
              <img src={showPasswordIcon} alt="icon" />
            </div>
            <button
              className="cta-btn login-btn"
              onClick={() => {
                navigate("/home");
                setShowAuth(false);
              }}
            >
              Login now
            </button>
            <div onClick={() => setShowLogin(false)}>
              <span className="grey-text"> Not registered yet? </span> Register
              →
            </div>
          </div>
        </div>
      ) : (
        <div className="login-cont">
          <div className="post login">
            {location.pathname === "/home" && (
              <div className="close-modal" onClick={() => setShowAuth(false)}>
                <img src={closeIcon} alt="icon" />
              </div>
            )}
            <div className="heading">
              <div className="grey-text">SIGN UP</div>
              <div>Create an account to continue</div>
            </div>
            <div>Email</div>
            <div>
              <div className="input grey-text">
                Enter your email
              </div>
            </div>
            <div>Username</div>
            <div>
              <div className="input grey-text">
                Chose a preferred username
              </div>
            </div>
            <div className="space-between">
              <div>Password</div>
              <div>Forgot password?</div>
            </div>
            <div className="space-between input">
              <div className="grey-text">Enter your password</div>
              <img src={showPasswordIcon} alt="icon" />
            </div>
            <button
              className="cta-btn login-btn"
              onClick={() => {
                navigate("/home");
                setShowAuth(false);
              }}
            >
              Login now
            </button>
            <div onClick={() => setShowLogin(true)}>
              <span className="grey-text">Already have an account? </span> Login
              →
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
