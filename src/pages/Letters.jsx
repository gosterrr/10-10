import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../App';
import { letters } from '../letters';
import '../letters.css';

export default function Letters(){
  return <Page className="letters-page">
    <section className="intro">
      <span className="eyebrow">Palabras que quiero entregarte</span>
      <h1>Cosas que debo<br/><em>decirte.</em></h1>
      <p>Tres cartas para ti. Ábrelas y léelas a tu ritmo.</p>
    </section>
    <div className="letter-stack">
      {letters.map((letter,index)=><details className={`envelope envelope-${index}`} key={letter.id}>
        <summary>
          <span className="envelope-fold" aria-hidden="true"/>
          <span className="envelope-number">Carta 0{index+1}</span>
          <span className="envelope-title">{letter.title}</span>
          <span className="envelope-from">De {letter.sender}, para ti</span>
          <span className="wax-seal" aria-hidden="true">♡</span>
          <span className="open-label"><span className="closed-label">Abrir esta carta ↓</span><span className="opened-label">Cerrar esta carta ↑</span></span>
        </summary>
        <div className="paper-wrap">
          <article className="letter-paper" aria-labelledby={`letter-${letter.id}`}>
            <span className="paper-detail" aria-hidden="true">10 · 10</span>
            <h2 id={`letter-${letter.id}`}>{letter.greeting}</h2>
            {letter.paragraphs.map((paragraph,i)=><p key={i}>{paragraph}</p>)}
            <div className="letter-signature"><p>{letter.closing}</p><span>{letter.signature}</span></div>
            <span className="paper-heart" aria-hidden="true">♡</span>
          </article>
        </div>
      </details>)}
    </div>
    <Link className="back" to="/nosotros">← Volver a nuestros recuerdos</Link>
  </Page>;
}
