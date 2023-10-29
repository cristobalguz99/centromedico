--index de funcion mi roserive

const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'database-centromedico2.c1le4q5e4ita.us-east-2.rds.amazonaws.com',
  user: 'admin',
  port:"3306",
  password: 'gWqRg810is7Ph3W9yamn',
  database: 'centromedicogalena',
});

exports.handler = async (event) => { 
    
      
      // CONSULTAMOS EN LA BASE DATOS
      console.log(JSON.stringify(event));
      for (let jl = 0; jl < event.usuarios.length; jl++) {
           let sql =  "INSERT INTO usuarios (nombre, rut, correo, fechaNacimiento, direccion, telefono, prevision) Values('"+event.usuarios[jl].nombre+"', '"+event.usuarios[jl].rut+"', '"+event.usuarios[jl].correo+"', '"+event.usuarios[jl].fechaNacimiento+"', '"+event.usuarios[jl].direccion+"','"+event.usuarios[jl].telefono+"', '"+event.usuarios[jl].prevision+"')";
           console.log(sql);
           await new Promise((resolve, reject) => { 
              con.query(sql, (err, res) => {
                        if (err) {
                          throw err
                        }
              resolve("OK");
              });
           })
      }
      
        const response = {
            status: 0,
            message:"exito",
        };
        return response;
    
};