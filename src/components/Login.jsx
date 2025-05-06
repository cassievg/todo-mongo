import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_d82HfSbPKmlpxMXSeIGCnB1Xshe-7VI",
  authDomain: "todo-auth-3e992.firebaseapp.com",
  projectId: "todo-auth-3e992",
  storageBucket: "todo-auth-3e992.firebasestorage.app",
  messagingSenderId: "2315922964",
  appId: "1:2315922964:web:6358825203481fc4f54101",
  measurementId: "G-C5S6BXTW9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/todo");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h3>Login</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />

            <label htmlFor="password">
                Password
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />

            <button type="submit">Log in</button>
        </form>
    );
};
