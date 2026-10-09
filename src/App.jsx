import React, { useEffect } from 'react';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Home from './pages/Puzzle';
import Memories from './pages/Timeline';
import Detail from './pages/Apology';
export function Page({children,className=''}){const reduced=useReducedMotion();return <motion.main className={`page ${className}`} initial={{opacity:0,y:reduced?0:18}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:reduced?0:.45}}>{children}</motion.main>;}
export default function App(){const location=useLocation();useEffect(()=>{window.scrollTo(0,0);},[location.pathname]);return <><header className="nav"><Link to="/">10 · 10</Link>{location.pathname!=='/'&&<Link to="/nosotros">Nuestros recuerdos</Link>}</header><AnimatePresence mode="wait"><Routes location={location} key={location.pathname}><Route path="/" element={<Home/>}/><Route path="/nosotros" element={<Memories/>}/><Route path="/canciones" element={<Detail kind="canciones"/>}/><Route path="/momentos" element={<Detail kind="momentos"/>}/><Route path="/decirte" element={<Detail kind="decirte"/>}/><Route path="/cupones" element={<Detail kind="cupones"/>}/><Route path="/secreto" element={<Detail kind="secreto"/>}/><Route path="/mirame" element={<Detail kind="final"/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes></AnimatePresence></>;}
