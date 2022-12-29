import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'tachyons';

const root = createRoot(document.getElementById('root'));

root.render(<App />)