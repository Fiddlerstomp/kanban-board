import React, { useEffect } from 'react';
import './App.css';
import Header from '../layout/header/Header';
import { getSpacesTC } from '../model/thunks/spaces-thunks';
import { useAppDispatch } from '../model/store';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const thunk = getSpacesTC();
    dispatch(thunk);
  }, []);

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
