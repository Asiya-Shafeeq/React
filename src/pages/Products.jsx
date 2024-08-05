import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import SimilarProducts from '../components/SimilarProducts/SimilarProducts';

const Products = () =>{
  const {product} = useContext(ShopContext);
  const {productsId} = useParams();
  const products = product.find((e)=> e.id === Number(productsId))
    return (
      <div>
        <ProductDisplay products = {products}/>
        <DescriptionBox/>
        <SimilarProducts/>
      </div>
    )
}

export default Products
