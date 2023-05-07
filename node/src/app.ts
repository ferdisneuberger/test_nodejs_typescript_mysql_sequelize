import express, { NextFunction, Request, Response } from 'express';
import "dotenv/config"
import usersRouter from './routes/users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use('/api/users', usersRouter)

// Middleware

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if(err instanceof Error){
            return response.status(400).json({
                message: err.message
            });
        }
        return response.status(500).json({
            status:"error",
            message: `Internal server error - ${err}`,
        });
    }
)

export { app };
