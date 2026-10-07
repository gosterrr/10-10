import { useEffect } from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Puzzle from './pages/Puzzle';
import Timeline from './pages/Timeline';
import Apology from './pages/Apology';
export function isUnlocked(){try{return sessionStorage.getItem('anniversary-unlocked')==='yes';}catch{return false;}}
function Guard({children}){return isUnlocked()?children:<Navigate to="/" replace/>;}
export function Page({children,className=''}){const reduce=useReducedMotion();return <motion.main className={`page ${className}`} initial={{opacity:0,y:reduce?0:16}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:reduce?0:0.45}}>{children}</motion.main>;}
export default function App(){const location=useLocation();useEffect(()=>{window.scrollTo(0,0);},[location.pathname]);return <><div className="ambient" aria-hidden="true"><i/><i/><i/></div><header className="nav"><Link to="/" className="brand">10 · 10 <span>un lugar para nosotros</span></Link>{location.pathname!=='/'&&<nav aria-label="Navegación principal"><Link to="/historia">Historia</Link><Link to="/disculpas">Mi carta</Link></nav>}</header><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<Puzzle/>}/><Route path="/historia" element={<Guard><Timeline/></Guard>}/><Route path="/disculpas" element={<Guard><Apology/></Guard>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></AnimatePresence><footer>Hecho con cariño · Cuatro años de recuerdos</footer></>;}
