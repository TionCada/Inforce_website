import React from 'react';
import s from './App.module.css'
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import background from './assets/images/background.svg'
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
      <div className={s.container} style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover' }}>
          <Header/>
          <MainPage/>
      </div>
  );
}

export default App;
