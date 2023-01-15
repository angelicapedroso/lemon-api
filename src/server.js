const express = require('express');
const cors = require('cors');
const eligibilityRouter = require('./routes/eligibility');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/eligibility', eligibilityRouter);

app.use(errorMiddleware);

const PORT = 3001;

app.listen(PORT, () => console.log('ouvindo na porta', PORT));
