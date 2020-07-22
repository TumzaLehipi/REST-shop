const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Handling GET request to /Products'
    })
});

router.post('/',(req, res, next) =>{
    res.status(201).json({
        message: 'Handling POST request to /Products'
    })
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id === 'special'){
        res.status(200).json({
            message : 'you discovered special ID'
        });
    }
    else{
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
});

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message : 'updated product'

    });
});

router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message : 'deleted  product'

    });
});



module.exports = router;