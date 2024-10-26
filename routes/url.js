import express from 'express';

import { createShortUrl } from '../controllers/urlController';
const router = express.Router();

router.post('/', createShortUrl);
module.exports = router;