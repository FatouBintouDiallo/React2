import React from 'react'
import product from './product'
const Image = ({imageUrl}) =>{
    return  <img src={product.imageUrl} alt="Product" style={{ maxWidth: '100%' }} />;
};
export default Image;
