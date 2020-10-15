import React from 'react';
import PropTypes from 'prop-types'

function Product({ imgUrl, name, price }) { 
return (
    <div>
      <img src={imgUrl} alt={name} width="640" />
      <h2>{name}</h2>
      <p>Price: {price}$</p>
      <button type="button">Add to cart</button>
    </div>
  );
};

Product.defaultProps = {
imgUrl:
'https://lh3.googleusercontent.com/proxy/rYhE3IyjFvfFPGhOF4-yjECqseSz0UnM6g9QIMHc2b7XlOQntXZq20y5DxgOHeN3YtIDSvRx49wpeGtf5jAyvqgusFR_tvMWMSk8BJHO9A-V7yTj3cbyewq5oKG_fphgrFgI1w',
};

Product.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Product;

