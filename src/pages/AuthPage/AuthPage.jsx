import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LogInForm";

export default function AuthPage({ setUser }) {
    const [showSignUpForm, setShowSignUpForm] = useState(true);

    return (
        <main>
            <button onClick={() => setShowSignUpForm(!showSignUpForm)}>{showSignUpForm ? 'Sign Up' : 'Log In' }</button>
            {showSignUpForm ? <SignUpForm setUser={setUser} /> : <LogInForm setUser={setUser} />}
        </main>
    );
}