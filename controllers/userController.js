import Url from '../models/userModel.js';

async function createShortUrl(req, res) {
    try {
        const { redirectUrl } = req.body;
        const shortId = generateShortId();
        const newUrl = new Url({ shortId, redirectUrl });
        await newUrl.save();
        res.status(201).json(newUrl);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { createShortUrl };