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
    img: "https://i.ibb.co/hgVhQ5L/cris-miro-Ilustracion.png",
    alt: "Imagen de ilustración",
    title: "ILUSTRACIONES",
    description: "Transformo tu idea en dibujitos",
    route: ILUSTRACIONES
  },
  {
    img: "https://i.ibb.co/DkfwP6t/morel-Mascotas.png",
    alt: "Imagen de ilustración",
    title: "MASCOTAS",
    description: "¿Quién no quiere un dibujito de su michi o perrito?",
    route: MASCOTAS
  },
  {
    img: "https://i.ibb.co/8NwDZzC/barba-Personajes.png",
    alt: "Imagen de ilustración",
    title: "PERSONAJES",
    description: "Desde Ricardo Fort a Gilda, ¡desafiame!",
    route: PERSONAJES
  },
  {
    img: "https://i.ibb.co/ZcTYd2X/dibujo-Blog.png",
    alt: "Imagen de ilustración",
    title: "BLOG PERSONAL",
    description: "Un espacio para compartir experiencias",
    route: BLOG_PERSONAL
  },
  {
    img: "https://i.ibb.co/p26HFS3/giuli-feria.jpg",
    alt: "Imagen de ilustración",
    title: "EXPO / FERIAS",
    description: "También me podes encontrar en ferias y eventos",
    route: EXPO_FERIAS
  },
  {
    img: "https://i.ibb.co/dpkm73Q/ricky-tienda.jpg",
    alt: "Imagen de ilustración",
    title: "TIENDA",
    description: "¿Querés quedar de maravillas con un regalito?",
    route: TIENDA
  },
];

export { ITEMS_WORKS };
