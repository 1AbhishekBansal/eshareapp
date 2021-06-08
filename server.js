require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const cors = require('cors');

require('./database/db');
// cors
const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5000']
}
app.use(cors(corsOptions));

app.use(express.static('public'));
//template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(express.json());
// routes
app.use("/api/files", require('./Routes/files'));
app.use("/files", require('./Routes/show'));
app.use("/files/download", require('./Routes/download'));

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
})