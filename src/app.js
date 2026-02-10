const express = require('express')
const app =express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('🆗 API Funcionando correctamente')
});
/* const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor Activo")
});
 */
module.exports = app;