import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { couplePhotos } from '../media';
import PhotoFrames from '../components/PhotoFrames';
import '../anniversary-details.css';
export default function Home(){return <Page className="welcome"><PhotoFrames photos={couplePhotos} count={6} background/><div className="welcome-shade"/><section className="welcome-message anniversary-message"><span className="anniversary-four" aria-hidden="true">4</span><div className="anniversary-front"><h1>Feliz Aniversario<br/><em>mi amor</em></h1><p className="personal-note">Te amo hoy, mañana y siempre</p><Link to="/nosotros" className="button">Entrar →</Link></div></section></Page>;}
