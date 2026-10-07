# Nuestra página de aniversario

## Desarrollo

Requiere Node.js 20.19+ o una versión LTS más reciente.

```bash
npm install
npm run dev
npm run build
```

## Personalizar

Edita src/data.js para cambiar mensajes, carta, títulos, pista y respuesta. La clave inicial es 1010. Los textos son borradores: reemplaza los mensajes generales con tus recuerdos reales antes de compartir.

Agrega fotos y videos MP4 a public/media. En memories usa image: '/media/foto.jpg' o video: '/media/video.mp4'. Puedes usar ambos. Mientras no agregues medios se muestran espacios decorativos, no archivos rotos. Revisa las fotos y sus descripciones antes de publicar. La firma se edita en src/pages/Apology.jsx.

## Vercel

Importa gosterrr/10-10, selecciona Vite, build npm run build y directorio dist. vercel.json permite recargar las rutas /historia y /disculpas. Comprueba el build en tu equipo o en Vercel; no se ejecutó durante la generación de los archivos.

## Privacidad

El acertijo es una experiencia visual, no autenticación. La respuesta y los mensajes son visibles en el código; los medios públicos pueden abrirse por URL. sessionStorage conserva la apertura durante la sesión de la pestaña. La etiqueta noindex solicita a buscadores no indexar, pero no controla el acceso. No publiques contenido sensible sin consentimiento. No hay analytics ni servicios de terceros en esta plantilla.
