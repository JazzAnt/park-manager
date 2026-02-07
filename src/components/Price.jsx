const Price = ({
  product = "",
  price = 0,
  increasePrice = (f) => f,
  decreasePrice = (f) => f,
  priceChange = 0,
  maxPrice = 0,
  minPrice = Number.MAX_SAFE_INTEGER,
}) => {
  return (
    <div className="price-container">
      <label className="product">Price of <span>{product.toUpperCase()}</span></label>
      <button
        className="btn btn-danger btn-sm"
        type="button"
        onClick={() => decreasePrice()}
        disabled={price <= minPrice}
        aria-disabled={price <= minPrice}
      >
        -${Number(priceChange).toFixed(2)}
      </button>
      <label className="price">${Number(price).toFixed(2)}</label>
      <button
        className="btn btn-success btn-sm"
        type="button"
        onClick={() => increasePrice()}
        disabled={price >= maxPrice}
        aria-disabled={price >= maxPrice}
      >
        +${Number(priceChange).toFixed(2)}
      </button>
    </div>
  );
};

export default Price;
