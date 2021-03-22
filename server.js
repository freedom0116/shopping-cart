require('dotenv-defaults').config();
// import { ApolloServer } from 'apollo-server';
// import mongoose from 'mongoose';
// import resolvers from './server/graphql/Resolvers';
// import typeDefs from './server/graphql/TypeDefs';
// import express from 'express';
// import path from 'path';
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const resolvers = require('./server/graphql/Resolvers');
const typeDefs = require('./server/graphql/TypeDefs');
const express = require('express');
const path = require('path');

const startServer = async () => {
    const server = new ApolloServer({
        resolvers,
        typeDefs
    })
    
    if (!process.env.MONGO_URL) {
        console.error('Missing MONGO_URL!!!')
        process.exit(1)
    }

    await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = mongoose.connection

    db.on('error', error => console.error('connection error', error))
    db.once('open', () => console.log('Connected to MongoDB'))

    server.listen({ port: process.env.PORT | 4000 }, () => {
        console.log(`The server is up on port ${process.env.PORT | 4000}!`)
    })
}

const port = process.env.PORT || 80;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);

startServer();
