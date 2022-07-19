const express = require('express');

const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.get('/api/user/me', async (req, res) => {
    console.log("express", req.cookies);
    const { token } = req.cookies;

    try {
        const apiRes = await fetch(`${process.env.API_URL}/api/user/me/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: `Token ${token}`
            }
        });

        const data = await apiRes.json();

        return res.status(apiRes.status).json(data);

    } catch (err) {
        return res.status(500).json({
            error: 'Something went wrong when trying to retrieve user'
        })
    }
})

module.exports = router;