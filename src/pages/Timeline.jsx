import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { sections } from '../data';
import { couplePhotos } from '../media';
import PhotoFrames from '../components/PhotoFrames';
import '../anniversary-details.css';
export default function Memories(){return <Page><section className="intro"><h1>Nosotros</h1><p className="personal-note">una pequeña muestra de nosotros jiji</p></section><PhotoFrames photos={couplePhotos} count={3}/><nav className="doors" aria-label="Nuestros recuerdos">{sections.map(section=>{const extra=section.path==='/secreto';const title=extra?'Extras':section.title;return <Link key={section.path} className={`door title-only ${extra?'secret-door':''}`} to={section.path}><h2 className={extra?'glitch':''} data-text={title}>{title}</h2></Link>;})}</nav></Page>;}
