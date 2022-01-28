//body-parser -> To send POST requests
import bodyParser from 'body-parser';
//cors -> For cross origin requests
import cors from 'cors';
//express -> Express as a framework for creating the routing of the application
import express from 'express';
//mongoose -> To create models for the posts
import mongoose from 'mongoose';
//nodemon -> So no need to manually reset the server everytime a change is made instead nodemon will do it

import postRoutes from './routes/posts.js';

//initialize app
const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://nadinCodeHat:123@cluster0.so9qo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) =>  console.log(error.message));

//mongoose('useFindAndModify', false);

//connect app with database (mongodb)
 