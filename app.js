const express = require('express');
const app = express();
const morgan = require('morgan');


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev'));

//routes which should handle request
app.use('/orders', orderRoutes);    
app.use('/products', productRoutes);

//error handling
app.use((req, res, next) => {
    const error = new Error('not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
});

module.exports = app;