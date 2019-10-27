import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import cors from 'cors';
import ScrapRouter from './routes';

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use('/api', ScrapRouter);

const viewsDir = path.join(__dirname, 'views');
app.set('views', viewsDir);

// Export express instance
export default app;
