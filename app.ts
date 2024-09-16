import express { Request, Response } from 'express';
import cors from 'cors';
import morgam from 'morgan';
import estudiantesRoutes from './routes/estudiantesRoutes';
import profesoresRoutes from './routes/profesoresRoutes';
import cursosRoutes from './routes/cursosRoutes';

import "reflect-metadata";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(morgam('dev'));


app.get('/', (req: Request, res: Response) => {
    res.send('app Universidad');
});

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);
app.use('/cursos', cursosRoutes);
app.use('/inscripciones', inscripcionRouter);

export default app;
    