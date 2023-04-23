import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import usersRouter from './routes/users';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES
app.use('/api/users', usersRouter)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
