import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './userSlice';

import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          name: userAuth.user.displayName,
          uid: userAuth.user.uid
        }));
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleRegister = () => {
    if (!name) {
      alert("Please enter a name");
      return;
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
        })
        .then(() => {
          dispatch(login({
            email: userAuth.user.email,
            name: userAuth.user.displayName,
            uid: userAuth.user.uid
          }));
        })
        .catch((error) => {
          alert(error.message);
        });
      });
  };

  return (
    <div className="login">
      <img src="linkedin3.png" alt="" />
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name (required)" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit" onClick={loginToApp}>Login</button>
      </form>
      <p>
        Not a member? <span className="lregister" onClick={handleRegister}>Register Now</span>
      </p>
    </div>
  );
}

export default Login;

