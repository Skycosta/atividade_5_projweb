// src/services/foodService.js
const Food = require('../models/food');

const getAllFoods = async () => {
  return await Food.find();
};

const addFood = async (foodData) => {
  const food = new Food(foodData);
  return await food.save();
};

const getFoodById = async (id) => {
  return await Food.findById(id);
};

const updateFoodById = async (id, foodData) => {
  return await Food.findByIdAndUpdate(id, foodData, { new: true, runValidators: true });
};

const deleteFoodById = async (id) => {
  return await Food.deleteOne({ _id: id });
};

module.exports = {
  getAllFoods,
  addFood,
  getFoodById,
  updateFoodById,
  deleteFoodById,
};

