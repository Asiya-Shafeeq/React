import React, { useContext } from 'react'
import './CSS/ShopCategroy.css'
import { ShopContext } from '../components/Context/ShopContext'
import Items from '../components/Items/Items';


const ShopCategory = ({ category }) => {
    const { product } = useContext(ShopContext);
  
    return (
      <div className="shp-category">
        <div className="show">
          <h1>Showing 1-8 out of 36 products</h1>
        </div>
          <div className="shopcategory-product">
          {product.map((item) => {
            if (category === item.category) {
              return (
                <Items
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  title={item.title}
                  arrow={item.arrow}
                  like={item.like_img}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  };

export default ShopCategory

