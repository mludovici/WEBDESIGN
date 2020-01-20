const express = require('express');
const app = express();

const port = 3000;

// app.get('/', function(req,res) {
//     res.sendFile('./index.html', {root: __dirname});
// });

app.use(express.static('./'));

app.listen(port||3000,  
    () => console.log(`listening on port ${port}!`));