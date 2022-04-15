import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wardell from './Wardell';
import Articles from './Articles';
import NBAAwards from './NBAAwards';
import MVP from './articles/MVP';
import COTY from './articles/COTY';
import ROTY from './articles/ROTY';
import Sixth from './articles/Sixth';
import DPOY from './articles/DPOY';
import MIP from './articles/MIP';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/wardell" element={<Wardell/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/awards' element={<NBAAwards/>}/>
        <Route path='/mvp' element={<MVP/>}/>
        <Route path='/coty' element={<COTY/>}/>
        <Route path='/roty' element={<ROTY/>}/>
        <Route path='/dpoy' element={<DPOY/>}/>
        <Route path='/sixth' element={<Sixth/>}/>
        <Route path='/mip' element={<MIP/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
