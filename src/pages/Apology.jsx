import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Page } from '../App';
import { sections, secret } from '../data';
import { couplePhotos } from '../media';
import PhotoFrames from '../components/PhotoFrames';
import '../extras-final.css';
function Extras(){
 const [step,setStep]=useState('warning');const navigate=useNavigate();let mapUrl='';
 try{const url=new URL(secret.mapEmbedUrl);if(url.protocol==='https:'&&['www.google.com','maps.google.com','www.google.cl'].includes(url.hostname))mapUrl=url.href;}catch{}
 return <Page className="secret-page"><section className="secret-panel"><h1 className="glitch" data-text="Extras">Extras</h1>
 {step==='warning'?<><h2>¿Estás segura de que quieres ingresar?</h2><div className="actions"><button className="button" onClick={()=>setStep('message')}>Sí, quiero entrar</button><Link className="button secondary" to="/nosotros">No, prefiero volver</Link></div></>:<>
 <p className="extras-warning">Quiero advertirte que en este sitio se encuentra un secreto. Pero para saberlo, debes cumplir con ciertos requisitos.</p>
 <section className="map-section" aria-label="Ubicación del secreto">{mapUrl?<iframe src={mapUrl} title="Ubicación en Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>:<div className="map-pending">Ubicación pendiente</div>}
 <h3>¿Te encuentras en este lugar?</h3><div className="actions"><button className="button" disabled={!mapUrl} onClick={()=>setStep('confirm')}>Sí</button><Link className="button secondary" to="/nosotros">No</Link></div></section>
 {step==='confirm'&&<section className="confirmation" aria-labelledby="confirm-title"><h2 id="confirm-title">¿Confirmas que estás en el lugar y quieres continuar?</h2><div className="actions"><button className="button" onClick={()=>navigate('/mirame',{state:{confirmed:true}})}>Sí, quiero continuar</button><button className="button secondary" onClick={()=>setStep('message')}>Todavía no</button></div></section>}
 </>}</section></Page>;
}
export default function Detail({kind}){
 const location=useLocation();
 if(kind==='secreto')return <Extras/>;
 if(kind==='final')return location.state?.confirmed?<Page className="welcome eyes-page"><PhotoFrames photos={couplePhotos} count={6} background/><div className="welcome-shade"/><h1 className="eyes-message">Mírame a los ojos<span className="eyes-ellipsis">…</span></h1></Page>:<Navigate to="/secreto" replace/>;
 const section=sections.find(item=>item.path===`/${kind}`);
 return <Page className="detail-page"><section className="detail-card"><h1>{section.title}</h1><Link className="button secondary" to="/nosotros">← Volver</Link></section></Page>;
}
