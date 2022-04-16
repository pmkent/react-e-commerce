import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();
// app.use(cors());
app.use(cors({
    origin: ['http://localhost:5000', 'http://localhost:3000']
}));

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Now serving at http://localhost:${port}`);
});