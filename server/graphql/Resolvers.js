// import Product from '../schema/Product'
// import cryptoRandomString from 'crypto-random-string'

const Product = require('../schema/Product');
const cryptoRandomString = require('crypto-random-string');

const resolvers = {
    Query: {
        products: async (parent, args, context, info) => {
            return await Product.find();
        }
    },
    Mutation: {
        createProduct: async (parent, { data }, context, info) => {
            const newProduct = new Product(data);
            newProduct._id = cryptoRandomString({ length: 10 });
            return await newProduct.save();
        }
    }
};

module.exports = resolvers;