const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const auth = require('./routes/auth');

app.use('/auth', auth);
// bodyParser allows us to access all the data in
// the req.body format.
//app.use(express.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: true  }))

app.get('/', (req, res) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})
})

app.listen(port, () => {
    console.log(`Example app listening at http:localhost:${port}`)
})
