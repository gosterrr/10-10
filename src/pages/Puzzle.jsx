import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { couplePhotos } from '../media';
import PhotoFrames from '../components/PhotoFrames';
export default function Home(){return <Page className="welcome"><PhotoFrames photos={couplePhotos} count={6} background/><div className="welcome-shade"/><section className="welcome-message"><h1>Feliz Aniversario<br/><em>mi amor</em></h1><Link to="/nosotros" className="button">Entrar →</Link></section></Page>;}
