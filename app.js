import * as path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import connectMongoDB from './config/mongoDB.js';


const app = express();
const { json, urlencoded } = bodyParser;

connectMongoDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(json());
app.use(urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
//app.use(express.urlencoded({ extended: true}));

app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//app.use(passport.authenticate('session'));

app.get('/',  (req, res) => res.render('index'));

export default app;