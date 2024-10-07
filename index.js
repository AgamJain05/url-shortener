import express from 'express';
import { createShortUrl } from './controllers/userController';
import { Router } from 'express';
import urlRoute from './routes/urlRoute';
const app = express();
const router = Router();
app.use(express.json());
app.use('/url', urlRoute);



app.post('/', userController);
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

