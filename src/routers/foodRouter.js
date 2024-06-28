// src/routers/foodRouter.js
const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/foods', foodController.getFoods);
router.post('/foods', foodController.addFood);
router.get('/foods/:id', foodController.getFoodById);
router.put('/foods/:id', foodController.updateFoodById);
router.delete('/foods/:id', foodController.deleteFoodById);

module.exports = router;
