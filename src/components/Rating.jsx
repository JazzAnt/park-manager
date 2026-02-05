import Star from "./Star";
const Rating = ({ rating = 0, maxRating = 5, onRate = (f) => f }) => {
  return [...Array(maxRating)].map((_, index) => (
    <Star key={index} onRate={() => onRate()} selected={index < rating} />
  ));
};

export default Rating;
