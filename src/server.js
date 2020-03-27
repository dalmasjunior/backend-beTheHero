const express = require('express');
const cors = require('cors');
const app = express();

const config = require('./config');
const routes = require('./routes/routes');

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(config.server.port, () => {
    console.log(`Running on port ${config.server.port}`);
    
})