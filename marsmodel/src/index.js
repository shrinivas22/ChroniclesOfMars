import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Apps  from './App';


// before loading the modules for the first time,
// also lazy load the CSS for the version of
// the script that you're loading from the CDN


//render(<WebMap />, rootElement);


ReactDOM.render(
  <React.StrictMode>
    
    <Apps />
  </React.StrictMode>,
  document.getElementById('root')
);

