const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('./routers/foodRouter');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://dbUser:lg291190@cluster0.mafgaqp.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'Cluster0', 
});


app.use(express.json());
app.use('/api', foodRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;