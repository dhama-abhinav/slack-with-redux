import { auth } from "./firebase";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Chat } from "./Chat";
import { selectUser, login, logout } from "./features/userSlice";
import { Header } from "./Header";
import { Login } from "./Login";
import { Sidebar } from "./Sidebar";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Chat />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
