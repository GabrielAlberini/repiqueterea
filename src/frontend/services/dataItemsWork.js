import {
  ILUSTRACIONES,
  MASCOTAS,
  PERSONAJES,
  BLOG_PERSONAL,
  EXPO_FERIAS,
  TIENDA
} from '../services/routesHeader';

const ITEMS_WORKS = [
  {
    img: "./img-home/ilustraciones.png",
    alt: "Imagen de ilustración",
    title: "Ilustraciones",
    url: "ilustraciones",
    description: "Transformo tu idea en dibujitos",
    route: ILUSTRACIONES
  },
  {
    img: "./img-home/mascotas.png",
    alt: "Imagen de ilustración",
    title: "Mascotas",
    url: "mascotas",
    description: "¿Quién no quiere un dibujito de su michi o perrito?",
    route: MASCOTAS
  },
  {
    img: "./img-home/personajes.png",
    alt: "Imagen de ilustración",
    title: "Personajes",
    url: "personajes",
    description: "Desde Ricardo Fort a Gilda, ¡desafiame!",
    route: PERSONAJES
  },
  {
    img: "./img-home/blog.png",
    alt: "Imagen de ilustración",
    title: "Blog personal",
    url: "blog-personal",
    description: "Un espacio para compartir experiencias",
    route: BLOG_PERSONAL
  },
  {
    img: "./img-home/expo.png",
    alt: "Imagen de ilustración",
    title: "Exposiciones y ferias",
    url: "expo-ferias",
    description: "También me podes encontrar en ferias y eventos",
    route: EXPO_FERIAS
  },
  {
    img: "./img-home/tienda.png",
    alt: "Imagen de ilustración",
    title: "Tienda",
    url: "tienda",
    description: "¿Querés quedar de maravillas con un regalito?",
    route: TIENDA
  },
];

export { ITEMS_WORKS };
