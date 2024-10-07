import Url from '../models/userModel.js';

async function createShortUrl(req, res) {
    try {
        const body = req.body;
        const uid = new ShortUniqueId();
        uid.rnd();
        await URL.create(
            {
                shortId: uid,
                redirectUr: body.url,
                visitHistory: []
            }
        )
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createShortUrl };