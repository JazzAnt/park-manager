import Star from "./Star";
const Rating = ({ rating = 0, onRate = (f) => f }) => {
  return [...Array(5)].map((_, index) => (
    <Star
      key={index}
      onRate={() => onRate(index + 1)}
      selected={index < rating}
    />
  ));
};

export default Rating;
