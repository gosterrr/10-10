import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { foodPhotos, placePhotos } from '../media';
import { SafePhoto } from '../components/PhotoFrames';
import '../photo-layout.css';
import '../anniversary-details.css';
function Collage({photos}){return <div className="moments-collage">{photos.map((photo,i)=><a className={`moment-tile tile-${i%6}`} href={photo.src} target="_blank" rel="noopener noreferrer" key={photo.src} aria-label={`Ver foto: ${photo.alt}`}><SafePhoto photo={photo}/></a>)}</div>;}
export default function Moments(){return <Page className="moments-page"><section className="intro"><h1>Mis momentos favoritos</h1><p className="personal-note">de esos que repetiría contigo ♡</p></section><section className="moment-board"><h2>Comidas</h2><p className="personal-note">porque comer contigo es otro nivel jiji</p><Collage photos={foodPhotos}/></section><section className="moment-board"><h2>Lugares y salidas</h2><p className="personal-note">por aquí y por allá, pero contigo</p><Collage photos={placePhotos}/></section><Link className="back" to="/nosotros">← Volver</Link></Page>;}
