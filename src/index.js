const express = require('express');
const { connection } = require('./database/connection');

const app = express();

connection(app);
