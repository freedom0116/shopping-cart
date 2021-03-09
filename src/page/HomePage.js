import './Page.css'
import React, { useState, useEffect } from 'react';

import Products from '../components/products/Products';
import FilterBar from '../components/filter/FilterBar';
import alldata from '../data.json';

function HomePage() {
    const [data, setData] = useState({});

    useEffect(() => {
        setData(alldata);
        sortProducts("Featured")
    }, []);

    const sortProducts = (sortOrder) => {
        const sortedProducts = alldata.products.sort((a, b) => {
            if(sortOrder === "Featured")
                return a.rating > b.rating ? -1 : 1;
            else if(sortOrder === "LowtoHigh")
                return a.price < b.price ? -1 : 1;
            else if(sortOrder === "HightoLow")
                return a.price > b.price ? -1 : 1;
            
            return 0;
        });

        setData({ products: sortedProducts });
    }

    return (
        <main>
            <FilterBar
                sortProducts={sortProducts} />
            <Products data={data} />
        </main>
    );
}

export default HomePage;