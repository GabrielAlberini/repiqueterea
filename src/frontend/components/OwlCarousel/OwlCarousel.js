import "./OwlCarousel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { Link } from "react-router-dom";
import { ITEMS_WORKS } from '../../services/dataItemsWork'

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
      {ITEMS_WORKS.map((item) => {
        return (
          <div className="item">
            <img src={item.img} alt={item.alt} />
            <Link to={`/${item.url}`} className="btn-main title-item-que-hago">
              {item.title}
            </Link>
          </div>
        );
      })}
    </OwlCarousel>
  );
};

export { GaleriaDeImagenes };
