const express = require('express');
const cookie = require('cookie');

const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

router.post('/api/user/token', async (req, res) => {
    const { email, password } = req.body;

    const body = JSON.stringify({
        email,
        password
    });

    try {
        const apiRes = await fetch(`${process.env.API_URL}/api/user/token/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body,
        });

        const data = await apiRes.json();

    if (apiRes.status === 200){

        res.setHeader('Set-Cookie', [
            cookie.serialize('token', data.token, {
                httpOnly: true,
                maxAge: 60 * 30,
                path: '/api/',
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production'
            }),
            // cookie.serialize('refresh', data.access, {
            //     httpOnly: true,
            //     maxAge: 60 * 30,
            //     path: '/api/',
            //     sameSite: 'strict',
            //     secure: process.env.NODE_ENV === 'production'
            // }),        
        ]);

        return res.status(200).json({ success: 'Logged in successfully'});
    } else {
        return res.status(apiRes.status).json(data);
    }
    } catch (err) {
        return res.status(500).json({
            error: 'Something went wrong when logging in',
        });
    }
});

module.exports = router;