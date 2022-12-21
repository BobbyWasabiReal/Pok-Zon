import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import logo from "../../P-removebg-preview.png";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ setUser }) {
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <main className="AuthPage">
        <button onClick={() => setShowSignUpForm(!showSignUpForm)}>
          {showSignUpForm ? "Sign Up" : "Log In"}
        </button>
        {showSignUpForm ? (
          <LogInForm setUser={setUser} />
        ) : (
          <SignUpForm setUser={setUser} navigate={navigate} />
        )}
      </main>
      <img src={logo} alt="logo" className="logo" />
    </>
  );
}
