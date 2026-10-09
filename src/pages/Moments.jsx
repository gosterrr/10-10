import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { foodPhotos, placePhotos } from '../media';
import { SafePhoto } from '../components/PhotoFrames';
import '../photo-layout.css';
export default function Moments(){return <Page className="moments-page"><section className="intro"><h1>Mis momentos favoritos</h1></section><section className="favorite-section"><h2>Comidas</h2><div className="favorites-grid">{foodPhotos.map(p=><figure key={p.src}><SafePhoto photo={p}/></figure>)}</div></section><section className="favorite-section"><h2>Lugares y salidas</h2><div className="favorites-grid">{placePhotos.map(p=><figure key={p.src}><SafePhoto photo={p}/></figure>)}</div></section><Link className="back" to="/nosotros">← Volver</Link></Page>;}
