const mysql = require('mysql');

exports.handler = async (event) => {
    const dbConfig = {
        host: 'database-centromedico2.c1le4q5e4ita.us-east-2.rds.amazonaws.com',
        user: 'admin',
        port:"3306",
        password: 'gWqRg810is7Ph3W9yamn',
        database: 'centromedicogalena',
    };

    const connection = mysql.createConnection(dbConfig);


    ----------------
    try {
        await connection.connect();
        
        const requestBody = JSON.parse(event.body);

        // Ajusta los nombres de los campos según tu objeto JSON
        const campo1 = requestBody.campo1;
        const campo2 = requestBody.campo2;

        // Consulta SQL para la inserción
        const insertQuery = 'INSERT INTO tu_tabla (campo1, campo2) VALUES (?, ?)';

        connection.query(insertQuery, [campo1, campo2], (error, results, fields) => {
            if (error) {
                console.error('Error al insertar en la base de datos:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: 'Error al insertar en la base de datos' }),
                };
            }
    ------------------

    try {
        await connection.connect();
        
        const requestBody = JSON.parse(event.body);

        const {nombre, rut, correo, fechaNacimiento, direccion, telefono, prevision} = requestBody; // Ajusta los nombres de los campos según tu formulario

        // Consulta SQL para la inserción
        const insertQuery = `INSERT INTO usuarios (nombre, rut, correo, fechaNacimiento, direccion, telefono, prevision) VALUES (?, ?, ?, ?, ?, ?, ?)`;

        connection.query(insertQuery, [nombre, rut, correo, fechaNacimiento, direccion, telefono, prevision], (error, results, fields) => {
            if (error) {
                console.error('Error al insertar en la base de datos:', error);
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: 'Error al insertar en la base de datos' }),
                };
            }

            console.log('Registro insertado correctamente');
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Registro insertado correctamente' }),
            };
        });
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error de conexión a la base de datos' }),
        };
    } finally {
        connection.end();
    }
};
