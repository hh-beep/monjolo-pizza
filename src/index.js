/* React */
import {  StrictMode  } from 'react';
import {  createRoot  } from 'react-dom/client';
import {  HashRouter  } from 'react-router-dom';

/* Style */
import './Styles/global.css';

/* Components */
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Api */
import LoadFont from './API/FontLoad';
import initializeFirebase from './API/Firebase';





LoadFont();
initializeFirebase();


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);


reportWebVitals();
