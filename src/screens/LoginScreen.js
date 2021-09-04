import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
function LoginScreen() {
  const [signin, setSignIn] = useState(false);

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          src="
          https://www.freepnglogos.com/uploads/netflix-logo-history-32.png"
          className="loginscreen__logo"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="signinbutton">
          Sign In
        </button>

        <div className="loginscreengradient" />
      </div>

      <div className="loginscreen__body">
        {signin ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and anime.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="loginscreeninput">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginscreengetstarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
