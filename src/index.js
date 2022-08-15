import React from 'react';
import ReactDOM from 'react-dom'
import  {BrowserRouter }  from 'react-router-dom';
import './style/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  // eslint-disable-next-line react/jsx-no-undef
  <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


