const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

dotenv.config()

//allows to use response as json
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongoDB connected');
    })
    .catch((err) => {
        console.log(err);
        console.log('DB not connected');
    });


app.use('/api/pins', pinRoute)
app.use('/api/users', userRoute)

app.listen(8800, () => {
    console.log('Backend server is running on port 8800');
})