import './Page.css'
import React, { useState, useEffect } from 'react';

import Products from '../components/products/Products';
import FilterBar from '../components/filter/FilterBar';
import alldata from '../data.json';

function HomePage() {
    const [data, setData] = useState({});
    const [priceOrder, setPriceOrder] = useState("");
    const [productSize, setProductSize] = useState("ALL")

    useEffect(() => {
        sortProducts("Featured")
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
        let sortedProducts = filtered(alldata.products, productSize);
        sortedProducts = sorted(sortedProducts, sortOrder);

        setData({ products: sortedProducts });
    }

    const filterProducts = (filterSize) => {
        let sortedProducts = filtered(alldata.products, filterSize);
        sortedProducts = sorted(sortedProducts, priceOrder);
        
        setData({ products: sortedProducts });
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
            <Products data={data} />
        </main>
    );
}

export default HomePage;