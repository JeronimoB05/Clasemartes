# Comandos
``git --version``
``node -v``
``npm -v``

**Inicializar un proyecto**
``npm init -y``
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

