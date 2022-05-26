import "./OwlCarousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Link } from "react-router-dom";

const GaleriaDeImagenes = () => {
  const options = {
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel {...options}>
      <div className="item">
        <img src="https://i.ibb.co/xg3zpv5/ilustracion-amigas.png" alt="" />
        <Link to="/ilustraciones" className="btn-main">
          Ilustaciones
        </Link>
      </div>
      <div className="item">
        <img src="https://i.ibb.co/W6kg8DK/mascotas-titi.png" alt="" />
        <Link to="/mascotas" className="btn-main">
          Mascotas
        </Link>
      </div>
      <div className="item">
        <img src="https://i.ibb.co/ZJ17d1s/personajes-gilda.png" alt="" />
        <Link to="/personajes" className="btn-main">
          Personajes
        </Link>
      </div>
      <div className="item">
        <img src="https://i.ibb.co/pxXVQrW/mascota-pipina.png" alt="" />
        <Link to="/expo-ferias" className="btn-main">
          Expo / Ferias
        </Link>
      </div>
      <div className="item">
        <img src="https://i.ibb.co/bHLbn1r/mixtape.png" alt="" />
        <Link to="/tienda" className="btn-main">
          Tienda
        </Link>
      </div>
    </OwlCarousel>
  );
};

export { GaleriaDeImagenes };
