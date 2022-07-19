const express = require('express');
const cookie = require('cookie');

const router = express.Router();

router.get('/api/user/logout', (req, res) => {
    res.setHeader('Set-Cookie', [
        cookie.serialize('token', '', {
            httpOnly: true,
            expires: new Date(0),
            path: '/api/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production'
        }),
    
    ]);

    return res.status(200).json({ success: 'Logged out successfully' });
})

module.exports = router;