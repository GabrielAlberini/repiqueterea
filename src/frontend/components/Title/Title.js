import "./Title.css";

const Title = ({title, subtitle}) => {
  return <div className="cont-title-component" subtitle={true}>
    <h1 className="section-title">{title}</h1>
    {subtitle && <h3 className="section-subtitle">{subtitle}</h3>}
  </div>;
};

export { Title };
