import React from "react";
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';


// react 18 need to use createRoot instead of ReactDOM module  
const root = createRoot(document.getElementById('root'));
root.render(<App />);