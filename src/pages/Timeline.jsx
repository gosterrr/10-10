import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { sections } from '../data';
import { couplePhotos } from '../media';
import PhotoFrames from '../components/PhotoFrames';
export default function Memories(){return <Page><section className="intro"><h1>Nosotros</h1></section><PhotoFrames photos={couplePhotos} count={3}/><nav className="doors" aria-label="Nuestros recuerdos">{sections.map(section=><Link key={section.path} className={`door title-only ${section.path==='/secreto'?'secret-door':''}`} to={section.path}><h2 className={section.path==='/secreto'?'glitch':''} data-text={section.title}>{section.title}</h2></Link>)}</nav></Page>;}
