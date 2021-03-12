import './Page.css'
import React, { useState, useEffect } from 'react';

import Products from '../components/products/Products';
import FilterBar from '../components/filter/FilterBar';
import data from '../data.json';

function HomePage(props) {
    const { products, cartItems, setProducts, setCartItems } = props;

    const [priceOrder, setPriceOrder] = useState("");
    const [productSize, setProductSize] = useState("ALL");

    useEffect(() => {
        sortProducts("Featured");
    }, []);

    const sorted = (products, sortOrder) => {
        return products.sort((a, b) => {
            if(sortOrder === "Featured")
                return a.rating > b.rating ? -1 : 1;
            else if(sortOrder === "LowtoHigh")
                return a.price < b.price ? -1 : 1;
            else if(sortOrder === "HightoLow")
                return a.price > b.price ? -1 : 1;
            
            return 0;
        });
    }

    const filtered = (products, filterSize) => {
        if(filterSize === "ALL")
            return products;
            
        return products.filter(product => {
            return product.availableSizes.indexOf(filterSize) >= 0;
        });
    }

    const sortProducts = (sortOrder) => {
        let sortedProducts = filtered(data.products, productSize);
        sortedProducts = sorted(sortedProducts, sortOrder);

        setProducts( sortedProducts );
    }

    const filterProducts = (filterSize) => {
        let sortedProducts = filtered(data.products, filterSize);
        sortedProducts = sorted(sortedProducts, priceOrder);
        
        setProducts( sortedProducts );
    }

    const addtoCart = (product) => {
      let isInCart = false;
      const updataCart = [...cartItems]
  
      updataCart.forEach(item => {
        if(item._id === product._id){
          item.count++;
          isInCart = true;
        }
      })
  
      if(!isInCart){
        updataCart.push({ ...product, count: 1 });
      }
  
      setCartItems(updataCart);
    }

    return (
        <main>
            <FilterBar
                priceOrder={priceOrder}
                productSize={productSize}
                setPriceOrder={setPriceOrder}
                setProductSize={setProductSize}
                sortProducts={sortProducts}
                filterProducts={filterProducts} />
            <Products 
                products={products}
                addtoCart={addtoCart} />
        </main>
    );
}

export default HomePage;