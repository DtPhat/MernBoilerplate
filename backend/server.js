import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middlerware/errorMiddlerware.js';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 5000;

connectDB();

const app = express()

//allow to parse raw json
app.use(express.json())

//allow to send form data
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', () => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))
} else {
  app.get('/', (req, res) => res.send('Server is ready'));
}


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));