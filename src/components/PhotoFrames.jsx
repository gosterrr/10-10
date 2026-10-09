import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import '../photo-layout.css';
export function SafePhoto({photo,background=false,animated=false,reduced=false,eager=false}){
 const [failed,setFailed]=useState(false);
 if(failed)return <span className="missing-photo" aria-label={background?undefined:photo.alt} aria-hidden={background?true:undefined}/>;
 if(!animated)return <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" onError={()=>setFailed(true)}/>;
 return <motion.img src={photo.src} alt={background?'':photo.alt} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduced?0:.65}} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)}/>;
}
export default function PhotoFrames({photos,count=3,background=false}){
 const [index,setIndex]=useState(0);const [paused,setPaused]=useState(false);const reduced=useReducedMotion();
 useEffect(()=>{if(paused||reduced||photos.length<2)return;const timer=setInterval(()=>{if(!document.hidden)setIndex(i=>(i+1)%photos.length);},2000);return ()=>clearInterval(timer);},[paused,reduced,photos.length]);
 if(!photos.length)return null;
 return <><div className={background?'photo-backdrop':'photo-frames'} aria-hidden={background?true:undefined}>{Array.from({length:count},(_,slot)=>{const p=photos[(index+slot*3)%photos.length];return <div className="crossfade-frame" key={slot}><AnimatePresence initial={false}><SafePhoto key={p.src} photo={p} background={background} animated reduced={reduced} eager={slot<2}/></AnimatePresence></div>;})}</div>{!background&&photos.length>1&&!reduced&&<button className="slideshow-toggle" onClick={()=>setPaused(p=>!p)} aria-label={paused?'Reanudar fotos':'Pausar fotos'}>{paused?'▶':'Ⅱ'}</button>}</>;
}
