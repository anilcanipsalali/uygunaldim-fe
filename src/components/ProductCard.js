import React from "react";

const ProductCard = (props) => {
  const { grid, products } = props;

  return (
    <>
      {products.map((product, i) => (
        <div className={`gr-${grid}`} key={i}>
          <div className="product-card position-relative h-100">
            <div>
              <img src={product.logo} className="img-fluid" style={{height:"260px", width:"260px"}} alt="2" />
            </div>
            <div className="product-details">
              <h6 className="brand">{product?.vendor}</h6>
              <h5 className="product-title">
                {product?.name}
              </h5>
              <p className="price">{product?.price + "₺"}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
