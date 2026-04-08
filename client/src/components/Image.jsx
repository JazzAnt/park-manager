const Image = ({ imgSrc = "https://picsum.photos/640/427", imgAlt = "" }) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      className="card-img-top"
    />
  );
};

export default Image;


//*These functions are now obsolete as I changes Image src to website url, but kept just in case */
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
//************************************************************************************************/
