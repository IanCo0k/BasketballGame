import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wardell from './Wardell';
import Articles from './Articles';
import HawksBeatHornets from './articles/HawksBeatHornets';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/wardell" element={<Wardell/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/hornetsvhawks' element={<HawksBeatHornets/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
