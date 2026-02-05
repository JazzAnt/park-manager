const Image = ({ imgSrc = "react.svg", imgAlt = "" }) => {
  return <img src={imgSrc} alt={imgAlt} className="card-img-top" width={128} height={128}/>;
};

export default Image;
