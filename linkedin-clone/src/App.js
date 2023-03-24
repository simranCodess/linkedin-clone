import React from 'react';
import './App.css';
import { login, logout, selectUser } from './userSlice';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import Widgets from './Widgets';
function App() {
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
          }
        ));
      }
      else{
        dispatch((logout));
      }
      })
  }, [])
  return (
    <div className="App">
    
      <Header />
       {!user ? (
        <Login />
       ) : (
      <div className='App_body' >
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
       )}
    </div>
  );
}

export default App;
