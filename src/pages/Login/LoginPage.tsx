import React, { useState } from "react";
import showPasswordIcon from "../../assets/images/showPassword.png";
import closeIcon from "../../assets/images/close.png";
import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login/Login";

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  localStorage.setItem("showCloseModal", "false");
  return (
    <div className="margin-10">
      <Login isLoginVisible={showLogin} setShowAuth={() => console.log("1")} />
    </div>
  );
};

export default LoginPage;
