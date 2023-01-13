const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 3001;

app.listen(PORT, () => console.log('ouvindo na porta', PORT));
