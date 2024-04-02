const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./path/uauth');
const userRoutes = require('./path/userRoutes');
const itemRoutes = require('./path/itemRoutes');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/api/auth', authRoutes);
app.use('/api/user',  userRoutes);
app.use('/api/items', itemRoutes);
// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error handler:', error.stack);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection at Promise:', err);
});
