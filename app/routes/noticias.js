module.exports = function (app) {
  app.get("/noticias", function (req, res) {

    var mysql = require('mysql');

    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'sistema',
      password: 'G4b.........',
      database: 'portal_noticias'
    })


    connection.connect(function (err) {
      if (err) throw err;
      console.log("Connected!");
    });

    connection.query("SELECT * FROM noticia", function (error, result) {

      res.send(result);

    });

    // res.render('noticias/noticias')
  });
};