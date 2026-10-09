# Incorporar fotos

El código está listo, pero los archivos WebP los debe copiar el usuario. Usa las fotos del ZIP fotos-y-galeria-aniversario preparado en el chat. Copia únicamente su carpeta public/media al proyecto actualizado, NO su carpeta src: el código de GitHub incluye mejoras posteriores para mostrar fondos neutros si faltan fotos.

Todos los archivos van en public/media, directamente, sin subcarpetas. No renombres .jpg a .webp: usa los WebP convertidos del ZIP.

## Fondo y Nosotros (solo pareja)
riendo-juntos.webp
disfraces.webp
halloween.webp
juntos-al-aire-libre.webp
gorros.webp
beso.webp
juntos-en-el-espejo.webp
abrazo-en-el-pasto.webp
beso-en-el-espejo.webp
selfie-con-filtro.webp
paseo-de-la-mano.webp
juntos-con-una-rosa.webp
salida-juntos.webp
abrazo-en-la-plaza.webp
beso-en-la-mejilla.webp

## Comidas
postre.webp
completos.webp
hamburguesas.webp

## Lugares y salidas
cuadros.webp
juntos-al-aire-libre.webp
paseo-de-la-mano.webp
salida-juntos.webp
abrazo-en-la-plaza.webp
cumpleanos-mona.webp

Las categorías pueden reutilizar la misma foto sin duplicar el archivo. mona.webp, chaqueta.webp y mona-y-su-gatito.webp se conservan en el ZIP pero no se usan en el fondo ni en Nosotros. La foto grupal se reserva para Lugares y salidas.

Los nombres y categorías se editan en src/media.js, no en el viejo arreglo photos de data.js. Los marcos cambian cada 2000 ms mediante opacidad, sin desplazamiento. Se pausan si la pestaña está oculta o si el usuario activa movimiento reducido. La galería tiene botón pausa.

Tras copiar las fotos: npm run build. Revisa en el celular. No se ejecutó el build durante esta actualización. Para publicar: git add public/media && git commit -m "Agregar fotos optimizadas" && git push.
