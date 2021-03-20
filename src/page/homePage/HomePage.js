import './HomePage.css'
import React, { useState, useEffect } from 'react';

import Products from '../../components/products/Products';
import FilterBar from '../../components/filter/FilterBar';

import { FETCH_PRODUCTS } from '../../graphql';
import { useQuery, useMutation } from 'react-apollo';

function HomePage() {    
    const { loading, data } = useQuery(FETCH_PRODUCTS);

    const [products, setProducts] = useState([]);
    const [priceOrder, setPriceOrder] = useState("");
    const [productSize, setProductSize] = useState("ALL");

    useEffect(() => {
        if(!loading){
            setProducts(data.products);
        }
    }, [data]);

    const sorted = (products, sortOrder) => {
        return products.slice().sort((a, b) => {
            if(sortOrder === "Featured")
                return a.rating > b.rating ? -1 : 1;
            else if(sortOrder === "LowtoHigh")
                return a.price < b.price ? -1 : 1;
            else if(sortOrder === "HightoLow")
                return a.price > b.price ? -1 : 1;
            else
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

        setProducts(sortedProducts);
    }

    const filterProducts = (filterSize) => {
        let sortedProducts = filtered(data.products, filterSize);
        sortedProducts = sorted(sortedProducts, priceOrder);
        
        setProducts(sortedProducts);
    }

    return (
        <main className="homePage">
            <FilterBar
                priceOrder={priceOrder}
                productSize={productSize}
                setPriceOrder={setPriceOrder}
                setProductSize={setProductSize}
                sortProducts={sortProducts}
                filterProducts={filterProducts} />
            <Products 
                products={products} />
        </main>
    );
}

export default HomePage;