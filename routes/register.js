const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post('/api/user/create', async (req, res) => {
    const { email, password, name } = req.body;

    const body = JSON.stringify({
        email,
        password,
        name
    });
    
    try {
        const apiRes = await fetch(`${process.env.API_URL}/api/user/create/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body,
        });

        const data = await apiRes.json();

        return res.status(apiRes.status).json(data);
    } catch (err) {
        return res.status(500).json({
            error: 'Something went wrong when registering account',
        });
    }
});

module.exports = router;