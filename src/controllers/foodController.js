const foodService = require('../services/foodService');

const getFoods = async (req, res) => {
  try {
    const foods = await foodService.getAllFoods();
    res.status(200).json(foods);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get foods' });
  }
};

const addFood = async (req, res) => {
  try {
    const food = await foodService.addFood(req.body);
    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add food' });
  }
};

const getFoodById = async (req, res) => {
  try {
    const food = await foodService.getFoodById(req.params.id);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to get food' });
  }
};

const updateFoodById = async (req, res) => {
  try {
    const food = await foodService.updateFoodById(req.params.id, req.body);
    if (food) {
      res.status(200).json(food);
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update food' });
  }
};

const deleteFoodById = async (req, res) => {
  try {
    const result = await foodService.deleteFoodById(req.params.id);
    if (result.deletedCount === 1) {
      res.status(204).end(); // No content returned
    } else {
      res.status(404).json({ error: 'Food not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete food' });
  }
};

module.exports = {
  getFoods,
  addFood,
  getFoodById,
  updateFoodById,
  deleteFoodById,
};
