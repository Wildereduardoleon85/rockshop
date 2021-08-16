import bcrypt from 'bcryptjs';

const users = [
    {
       nombre: 'Administrador',
       correo: 'administrador@email.com',
       contraseña: bcrypt.hashSync('123456', 10),
       esAdministrador: true
    },
    {
        nombre: 'Alejandro Martinez',
        correo: 'alejandro@email.com',
        contraseña:  bcrypt.hashSync('123456', 10)
     },
     {
        nombre: 'Pedro Rodriguez',
        correo: 'pedro@email.com',
        contraseña:  bcrypt.hashSync('123456', 10)
     }
]

export default users