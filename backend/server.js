const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()

mongoose.connect('mongodb://ec2-3-138-32-201.us-east-2.compute.amazonaws.com:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err))


// Settings

app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

// // Bring in the Passport Strategy

// Routes (URL)

app.use('/api/auth', require('./routes/auth'))

// Static files
app.use(express.static(process.cwd() + '/dist'))

// Server is listening

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})