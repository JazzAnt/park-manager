const imgGlob = import.meta.glob(
  "../assets/images/*.{pjp,jfif,jpe,pjpeg,jpeg,jpg,png,svgz,svg}",
  {
    eager: true,
  },
);
const getImage = (filename = "vite.svg") => {
  // Try to get image from /assets/images folder
  const imgModule = imgGlob[`../assets/images/${filename}`];
  if (imgModule) return imgModule.default;

  // If not found, assume it's in the /public/images folder
  return `/images/${filename}`;
};

const Image = ({ imgSrc = "vite.svg", imgAlt = "" }) => {
  return (
    <img
      src={getImage(imgSrc)}
      alt={imgAlt}
      className="card-img-top"
      width={128}
      height={128}
    />
  );
};

export default Image;
