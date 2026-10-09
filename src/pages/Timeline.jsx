import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { sections } from '../data';
import { couplePhotos } from '../media';
import PhotoFrames from '../components/PhotoFrames';
import '../anniversary-details.css';
import '../playlist.css';
const playlistUrl='https://open.spotify.com/playlist/2OOxoVEd1ymHE67SC58LmY?si=33c51c82bbcb4cd0';
export default function Memories(){return <Page><section className="intro"><h1>Nosotros</h1><p className="personal-note">una pequeña muestra de nosotros jiji</p></section><PhotoFrames photos={couplePhotos} count={3}/><section className="playlist-card" aria-labelledby="playlist-title"><h2 id="playlist-title">Vuelve a escucharnos</h2><iframe src="https://open.spotify.com/embed/playlist/2OOxoVEd1ymHE67SC58LmY?utm_source=generator&theme=0" title="Vista previa de nuestra playlist en Spotify" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" allowFullScreen/><a className="button playlist-link" href={playlistUrl} target="_blank" rel="noopener noreferrer">Abrir nuestra playlist ↗</a></section><nav className="doors" aria-label="Nuestros recuerdos">{sections.filter(section=>section.path!=='/canciones').map(section=>{const extra=section.path==='/secreto';const title=extra?'Extras':section.title;return <Link key={section.path} className={`door title-only ${extra?'secret-door':''}`} to={section.path}><h2 className={extra?'glitch':''} data-text={title}>{title}</h2></Link>;})}</nav></Page>;}
