import Star from "./Star";
const Rating = ({rating = 0, maxRating = 5}) => {
    return ( [...Array(maxRating)].map((_,index) => <Star selected={index < rating}/>) );
}
 
export default Rating;
