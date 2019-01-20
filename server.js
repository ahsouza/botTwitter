const express = require('express'),
 app = express(),
 port = proccess.env.PORT || 3000
 
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})