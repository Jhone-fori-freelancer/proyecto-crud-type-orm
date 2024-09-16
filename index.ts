import app from './app';
import {initializeDatabase} from './db/conexion';

const port = parseInt(process.env.PORT || '3000', 10);
const host = process.env.HOST || '0.0.0.0';

async function main() {
    try {
        await initializeDatabase();
        console.log('Database connection successful');
        app.listen(port, host, () => {
            console.log(`Server listening at http://${host}:${port}`);
        });
    } catch (error:unknown) {
        if(error instanceof Error){
            console.error('Error al conectar a la base de datos', error.message);
        }
    }
}
       
main();