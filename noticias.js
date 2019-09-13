import {
  createServer,
} from 'http';

const server = createServer((req, res) => {
  const categoria = req.url;

  if (categoria === '/tecnologia') {
    res.end('<html><body>Noticias de tecnologia</body></html>');
  } else if (categoria === '/moda') {
    res.end('<html><body>Noticias de moda</body></html>');
  } else if (categoria === '/beleza') {
    res.end('<html><body>Noticias de beleza</body></html>');
  } else {
    res.end('<html><body>Portal de Noticias</body></html>');
  }
})
  .listen(3000);
