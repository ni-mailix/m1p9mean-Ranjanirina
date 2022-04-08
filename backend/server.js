
////////////////////////////// creation serveur node /////////////////////
const http = require('http');  // importation du package http pour le serveur
const app = require('./app'); /// importation de la fonction app contenu dans l'application principale app.js

/*
const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});
*/

///////////// debut   ///////////
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
  const port = normalizePort(process.env.PORT || '3000');
  app.set('port', port);
  
  const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };
///////////// fin    ///////////

const server = http.createServer(app);  


/////////////    debut ////////
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});
////////////   fin   /////////////

server.listen(process.env.PORT || 3000);
/////////////////////    fin     /////////////////////////////////