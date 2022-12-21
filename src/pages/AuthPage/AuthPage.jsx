import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";
import logo from '../../P-removebg-preview.png'
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
    const [showSignUpForm, setShowSignUpForm] = useState(true);

    return (
        <main className="AuthPage">
            <button onClick={() => setShowSignUpForm(!showSignUpForm)}>{showSignUpForm ? 'Sign Up' : 'Log In' }</button>
            {showSignUpForm ? <LogInForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
            <img src={logo} alt="logo" />
        </main>
    );
}