import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { photos } from '../data';
export function Photo({photo,index=0}){return <div className={`photo tone-${index%5}`}>{photo?<img src={photo.src} alt={photo.alt||'Un recuerdo nuestro'} loading="lazy" onError={e=>{e.currentTarget.style.display='none';}}/>:<span className="photo-empty">♡<small>Un recuerdo nuestro</small></span>}</div>;}
export default function Home(){const collage=photos.length?Array.from({length:Math.max(12,photos.length)},(_,i)=>photos[i%photos.length]):Array(12).fill(null);return <Page className="welcome"><div className="collage" aria-hidden="true">{collage.map((photo,i)=><Photo key={i} photo={photo?{...photo,alt:''}:null} index={i}/>)}</div><div className="welcome-shade"/><section className="welcome-message"><span className="eyebrow">Cuatro años de nosotros</span><h1>Feliz Aniversario<br/><em>mi amor</em></h1><p>Un pequeño lugar para nuestras fotos, nuestros recuerdos y todo lo que quiero compartir contigo.</p><Link to="/nosotros" className="button">Tengo algo para ti <span aria-hidden="true">→</span></Link></section></Page>;}
