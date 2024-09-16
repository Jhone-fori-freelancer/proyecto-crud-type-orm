import { Database } from "typeorm";

export const AppDataSource = new Database({
    type: "mysqlite",
    host: "ip-server",
    port: 3306,
    username: "nombre-usuario",
    password: "clave",
    database: "universidad",
    logging: true,
    entities: [Estudiante, Profesor, Curso],
    synchronize: false

    

})