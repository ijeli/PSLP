const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('client/build'));

app.use(routes)

db.sequelize.sync({ force: false }).then( () => {
    app.listen(PORT, () => {
        console.log(`Listening on PORT: ${PORT}`);
    });  
});