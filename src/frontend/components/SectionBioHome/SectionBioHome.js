import "./SectionBioHome.css";


const SectionBioHome = () => {
  return (
    <section className="section-bio">
      <div className="cont-img-bio">
        <img
          className="img-bio"
          src="https://i.ibb.co/z7XtZjc/foto-de-perfil.jpg"
          alt="imagen de biografía"
        />
      </div>
      <div>
        <p>
          ¡Hola! Mi nombre es Camila Ocampo y naci en San Justo, Santa Fe, una
          pequeña ciudad del norte de la provincia.
        </p>
        <p>Actualmente vivo en la capital donde estudio y trabajo.</p>
        <p>
          Bienvenides a mi página, que también podemos llamarla, baúl,
          biblioteca, museo, exposición, o en fin, como más te guste.
        </p>
        <p>
          Aquí voy a compartit todo lo que produzco, desde las ilustraciones
          hasta el material que utilizo para dar mis clases. ¡Un montón!
        </p>
        <p>Espero que disfrutes el paseo.</p>
        <p>
          Por cualquier cosa, me podes enviar un mensajito, quien dice, tal vez
          terminamos trabajando juntis! :D
        </p>
      </div>
    </section>
  );
};

export { SectionBioHome };
