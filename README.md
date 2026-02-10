# Comandos
``git --version``
``node -v``
``npm -v``

**Inicializar un proyecto**
``npm init -y``
``npm install express``
## manejo de git
``git init``

``git add .``
``git commit -m "v1"``
``git branch -M master``
``git remote add origin https://github.com/JeronimoB05/Clasemartes.git``

# 📁Estructura profesionales de una API en Node.js
api-node
    |-scr **Aqui vive todo el codigo real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las éticiones HTTP**
        |-middlewares **Intermediarios de seguridad y validacion**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de las API**
        |-services **logica del negocio**
        |-utils **Funciones reutilizabes**
        |-app.js **Configuracion de la aplicacion**
        |-server.js **punto de arranque**

``npm install  dotenv sequelize mysql2 pg pg-hstore ``
``npm install nodemon --save-dev``

crear .env anivel de src
'''
DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_api3278524
DB_USER=root
DB_PASSWORD=
PORT=3000

'''
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=node_api3278524
DB_USER=postgres
DB_PASSWORD=mycontraseña
PORT=3000

'''
📁 src/config/database.js

📁 src/server.js

configuramos package.json ``"start": "node src/server.js",```
ejecutamos el servidor con ``npm start``
ajustamos a app.js

``
/* const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor Activo")
});
 */
module.exports = app;
``
📁 src/models/usuario.models.js
📁 src/services/usuario.service.js
📁 src/controllers/usuarios.controller.js