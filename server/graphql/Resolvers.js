import Product from '../schema/Product'
import cryptoRandomString from 'crypto-random-string'

const resolvers = {
    Query: {
        products: async (parent, args, context, info) => {
            console.log('here')
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

export default resolvers;