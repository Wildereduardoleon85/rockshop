import bcrypt from 'bcryptjs';

const users = [
    {
       nombre: 'Administrador',
       email: 'administrador@email.com',
       contraseña: bcrypt.hashSync('123456', 10),
       esAdministrador: true
    },
    {
        nombre: 'Alejandro Martinez',
        email: 'alejandro@email.com',
        contraseña:  bcrypt.hashSync('123456', 10)
     },
     {
        nombre: 'Pedro Rodriguez',
        email: 'pedro@email.com',
        contraseña:  bcrypt.hashSync('123456', 10)
     }
]

export default users