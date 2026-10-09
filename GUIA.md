# Aniversario: nueva experiencia

La experiencia anterior fue reemplazada. Los nombres de archivo Puzzle.jsx, Timeline.jsx y Apology.jsx se reutilizan para inicio, menú de recuerdos y secciones; ya no contienen puzzle, línea de tiempo ni la carta antigua. La paleta está unificada en src/styles.css.

## Probar

npm install
npm run dev
npm run build

No se ejecutó el build durante la preparación: verifica localmente o en Vercel.

## Fotos

Agrega tus fotos a public/media y completa photos en src/data.js con objetos {src:'/media/foto.jpg',alt:'Descripción del recuerdo'}. El collage usa estas fotos y el menú las muestra animadas. Sin fotos aparecen espacios decorativos, no imágenes de personas inventadas.

## Secciones

/canciones, /momentos, /decirte y /cupones están preparadas con contenido pendiente. /secreto pide confirmación, muestra un borrador largo y el espacio del mapa. Cambia secret.paragraphs cuando definamos la carta real.

## Google Maps

La ubicación está vacía intencionalmente. Cuando elijas el lugar, usa Compartir > Insertar un mapa en Google Maps y copia únicamente la URL src del iframe en secret.mapEmbedUrl; agrega secret.placeName. Se admiten URLs HTTPS de www.google.com, maps.google.com y www.google.cl. No pegues un enlace corto como URL de iframe. No hay acceso al GPS. Hasta configurar el mapa, el botón Sí permanece desactivado.

Después de confirmar que está en el lugar, se pide otra confirmación; al aceptarla abre /mirame. Entrar directamente a esa ruta sin el estado de confirmación redirige a /secreto. Este flujo no es autenticación y no protege contenido privado.

## Privacidad y despliegue

Las fotos y mensajes del frontend pueden verse públicamente; usa contenido compartible y con consentimiento. El iframe de Google Maps carga un servicio externo cuando se configure. Vercel: Vite, build npm run build, output dist. Se conserva vercel.json y la configuración JSX de Vite.
