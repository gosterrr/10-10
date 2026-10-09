// Agrega fotos reales a public/media y sus rutas a este arreglo.
export const photos = [];
// Ejemplo: { src: '/media/foto1.jpg', alt: 'Nosotros en nuestra aventura' }
export const sections = [
 {path:'/canciones',title:'Canciones que me recuerdan a ti',symbol:'♫',description:'Hay canciones que tienen un poquito de nosotros.'},
 {path:'/momentos',title:'Mis momentos favoritos',symbol:'♡',description:'Esos recuerdos a los que siempre quiero volver.'},
 {path:'/decirte',title:'Cosas que debo decirte',symbol:'✉',description:'Palabras que merecen su propio espacio.'},
 {path:'/cupones',title:'Cupones',symbol:'✧',description:'Pequeñas sorpresas para compartir.'},
 {path:'/secreto',title:'Secreto',symbol:'?',description:'Hay algo más detrás de esta puerta.'}
];
export const secret = {
 // Pendiente: pega aquí la URL src de un iframe de Google Maps para el lugar que elijas.
 mapEmbedUrl: '',
 placeName: '',
 // Borrador editable; definiremos el mensaje y la decisión contigo.
 paragraphs: [
 'Antes de continuar, quiero que te tomes un momento. Lo que hay detrás de esta página lo quiero compartir contigo con calma y en persona.',
 'Estos cuatro años siendo compañeros han sido complejos, llenos de aventuras y de recuerdos que nos acompañarán siempre. Este espacio guarda un poquito de todo eso, pero hay palabras que no quiero dejar solamente en una pantalla.',
 'No tienes que seguir por curiosidad ni sentir que debes responder de una forma determinada. Puedes volver a nuestros recuerdos cuando quieras. Cuando preparemos este lugar, quiero que llegues aquí porque tú también quieres estar.',
 'Si decides continuar, revisa el lugar del mapa. La página te preguntará si estás allí y volverá a pedirte confirmación antes de mostrar el último mensaje. No se revisará tu ubicación automáticamente.',
 'El resto quiero decirlo mirándote a los ojos.'
 ]
};
