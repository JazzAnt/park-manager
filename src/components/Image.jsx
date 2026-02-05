const Image = ({ imgSrc, imgAlt = "" }) => {
  return <img src={imgSrc} alt={imgAlt} className="card-img-top" />;
};

export default Image;
