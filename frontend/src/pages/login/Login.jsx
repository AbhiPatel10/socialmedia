import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext)

  const handleClick = (e) =>{
    e.preventDefault();
    // console.log(email.current.value)
    loginCall(
      {email: email.current.value, password:password.current.value},
      dispatch
      );
  }

  // console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">JaySocial</h3>
          <span className="loginDesc">
          Social media is providing a way to establish your own community😊
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
            <input
            placeholder="Password"
            type="password"
            required
            minLength="6"
            className="loginInput"
            autoComplete="on"
            ref={password}/>
            <button className="loginButton" type="submit" disabled={isFetching}>
            {isFetching ? (<CircularProgress />) : ("Log In")}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            {isFetching ? (<CircularProgress />) : ("Create a New Account")}

            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
