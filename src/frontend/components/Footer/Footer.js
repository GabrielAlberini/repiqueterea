import "./Footer.css";
import { Logo } from "../Logo/Logo";
import { LinksContacto } from "../LinksContacto/LinksContacto";

const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
      </div>
      <LinksContacto />
      <div>
        <p className="cont-text-footer">
          Sitio desarrollado por <br />{" "}
          <a
            href="https://gabrielalberini.con.ar/"
            target="_blank"
            rel="noreferrer"
          >
            Gabriel Alberini
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };


