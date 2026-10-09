import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Page } from '../App';
import '../coupons.css';

const coupons = [
  {title:'VALE POR UNA NOCHE DE PELÍCULAS',text:'tu eliges la peli y los snakss.',icon:'☾'},
  {title:'VALE POR UN PICNIC PARA DOS',text:'para alfin tener nuestro picnic.',icon:'✿'},
  {title:'VALE POR TU COMIDA FAVORITA',text:'uste me lo pide y yo le hago su lomo saltado',icon:'♡'},
  {title:'VALE POR CARIÑI',text:'canjeelo cuando lo necesite.',icon:'❀'},
  {title:'VALE POR UN ANTOJO',text:'lo que uste desee vidii.',icon:'✧'},
  {title:'VALE POR UNA NOCHE DE REGALONEO',text:'cariñito, bsito, peli y algo rico po.',icon:'☾'},
  {title:'VALE POR UN POSTRE HECHO POR MÍ',text:'lo preparo con mucho amor para ti siiiipo.',icon:'✿'},
  {title:'VALE POR BESOS',text:'Para cuando quiera miles de besos mios jiji.',icon:'♡'}
];
export default function Coupons(){const reduced=useReducedMotion();return <Page className="coupons-page"><section className="intro"><span className="eyebrow">Ocho pequeñas promesas para ti</span><h1>Cupones para<br/><em>mi mona</em></h1><p>Elige el que quieras y muéstramelo cuando quieras canjearlo.</p></section><section className="coupon-grid" aria-label="Cupones para mi mona">{coupons.map((coupon,i)=><motion.article key={coupon.title} className={`coupon coupon-${i%5}`} initial={{opacity:0,y:reduced?0:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reduced?0:.45,delay:reduced?0:(i%2)*.08}}><div className="coupon-main"><span className="coupon-icon" aria-hidden="true">{coupon.icon}</span><span className="coupon-label">Para mi mona · Con amor</span><h2>{coupon.title}</h2><p>{coupon.text}</p><span className="coupon-heart" aria-hidden="true">♡</span></div><div className="coupon-stub"><span>VALE 0{i+1}</span><i aria-hidden="true"/><small>10 · 10</small></div></motion.article>)}</section><p className="coupon-note">Guárdalo en una captura o vuelve aquí cuando lo necesites. El canje es contigo y conmigo, no se registra en la página.</p><Link className="back" to="/nosotros">← Volver a nuestros recuerdos</Link></Page>;}
