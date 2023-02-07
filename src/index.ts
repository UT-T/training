import express, { Express, Request, Response } from 'express'
import jQuery = require('jquery');

const app: Express = express();
const port = process.env.PORT || 3000;
const path = require("path");
const html = '/work/out/public/html/';

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req: Request, res: Response) => {
    res.sendFile(html+'index.html');
})

app.get('/test', (req: Request, res: Response) => {
    res.sendFile(html+'test.html');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})