import { Link } from 'react-router-dom';
import { Page } from '../App';
import { letter } from '../data';
export default function Apology(){return <Page className="letter-page"><section className="letter"><span className="eyebrow">Una carta para ti</span><h1>Quiero pedirte<br/><em>perdón.</em></h1><div className="letter-body">{letter.map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div><div className="signature">Con cariño y responsabilidad,<br/><span>Benjamín</span></div><div className="palette" aria-hidden="true"><i/><i/><i/><i/><i/></div></section><Link className="text-button back" to="/historia">← Volver a nuestros recuerdos</Link></Page>;}
