const express = require('express');
const router = express.Router();
const UserProfile = require('../models/UserProfile');
const authenticationMiddleware = require('../middleware/userauthticationmiddleware');


router.get('/profile', authenticationMiddleware, async (req, res) => {
    try {
        const user = await UserProfile.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ name: user.name, profilePic: user.profilePic });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
