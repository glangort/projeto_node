const app = require('./config/server');

const rotaHome = require('./app/routes/home')(app);

// var rotaInclusaoNoticia = require("./app/routes/formulario_inclusao_noticia")(
//   app
// );

const rotaNoticia = require('./app/routes/noticias')(app);

app.listen(3001);
