import './FilterBar.css'
import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function Bar(props) {
    const {sortProducts} = props;

    const [priceOrder, setPriceOrder] = useState("");
    const [productSize, setProductSize] = useState("")

    const handleSort = (e) => {
        sortProducts(e);
        setPriceOrder(e);
    };

    const handlefilter = (e) => {
        setProductSize(e);
    };
    
    return (
        <div className="bar">
            <FormControl 
                variant="outlined" 
                size='small' 
                style={{ width: '12em' }}
            >
                <InputLabel id="sorted" >Sorted</InputLabel>
                <Select
                    labelId="sorted"
                    value={priceOrder}
                    onChange={e => handleSort(e.target.value)}
                >
                    <MenuItem value="Featured">Featured</MenuItem>
                    <MenuItem value="LowtoHigh">Price: Low to High</MenuItem>
                    <MenuItem value="HightoLow">Price: High to Low</MenuItem>
                </Select>
            </FormControl>
            <FormControl 
                variant="outlined" 
                size='small' 
                style={{ width: '12em' }}
            >
                <InputLabel id="filter" >Filter</InputLabel>
                <Select
                    labelId="filter"
                    value={productSize}
                    onChange={e => handlefilter(e.target.value)}
                >
                    <MenuItem value="ALL">ALL</MenuItem>
                    <MenuItem value="XS">XS</MenuItem>
                    <MenuItem value="S">S</MenuItem>
                    <MenuItem value="M">M</MenuItem>
                    <MenuItem value="L">L</MenuItem>
                    <MenuItem value="XL">XL</MenuItem>
                    <MenuItem value="XXL">XXL</MenuItem>
                </Select>
            </FormControl>
        </div>
    );

}

export default Bar;