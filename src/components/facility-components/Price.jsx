const Price = ({
  product,
  price,
  increasePrice,
  decreasePrice,
  priceChange,
  maxPrice,
  minPrice,
}) => {
  return (
    <div className="row">
      <p className="col-8">Price of {product}</p>
      <button
        className="col-1 btn btn-danger btn-sm"
        type="button"
        onClick={() => decreasePrice()}
        disabled={price <= minPrice}
        aria-disabled={price <= minPrice}
      >
        -${priceChange}
      </button>
      <p className="col-2">${Number(price).toFixed(2)}</p>
      <button
        className="col-1 btn btn-success btn-sm"
        type="button"
        onClick={() => increasePrice()}
        disabled={price >= maxPrice}
        aria-disabled={price >= maxPrice}
      >
        +${priceChange}
      </button>
    </div>
  );
};

export default Price;
