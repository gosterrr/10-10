const photo = name => ({src:`/media/${name}.webp`,alt:name.replaceAll('-',' ')});
export const couplePhotos = ['riendo-juntos','disfraces','halloween','juntos-al-aire-libre','gorros','beso','juntos-en-el-espejo','abrazo-en-el-pasto','beso-en-el-espejo','selfie-con-filtro','paseo-de-la-mano','juntos-con-una-rosa','salida-juntos','abrazo-en-la-plaza','beso-en-la-mejilla'].map(photo);
export const foodPhotos = ['helado-chocolate','postre','tacos-juntos','hamburguesas','pollo-con-papas','papas-para-compartir','sushi-en-el-pasto','sushi-burgers','completos','completos-para-dos','completos-en-casa','completos-de-paseo'].map(photo);
export const placePhotos = ['cuadros','juntos-al-aire-libre','paseo-de-la-mano','salida-juntos','abrazo-en-la-plaza','cumpleanos-mona'].map(photo);
