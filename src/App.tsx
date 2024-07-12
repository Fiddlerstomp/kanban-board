import React, { useEffect } from 'react';
import './App.css';
import Header from './layout/header/Header';
import Spaces from './layout/spaces/Spaces';
import { getSpacesTC } from './model/thunks/spaces-thunks';
import { useAppDispatch } from './model/store';
import authAPI from './api/auth-api';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    authAPI.login();
    const thunk = getSpacesTC();
    dispatch(thunk)
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Spaces />
    </div>
  );
}

export default App;
