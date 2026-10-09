import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { secret } from './data';
import { mapEmbedUrl } from './location';
import './styles.css';
import './typography.css';
import './secret-effects.css';
import './mobile.css';

// Configura el mapa sin sobrescribir las fotos ni los mensajes de data.js.
secret.mapEmbedUrl = mapEmbedUrl;

createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
