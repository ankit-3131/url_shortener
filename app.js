const express = require('express');
const app = express();
const  PORT = 5000;

// app.get('/', handlerHomePage);

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)});