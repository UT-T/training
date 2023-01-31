import express, { Express, Request, Response } from 'express'
import jQuery = require('jquery');

const app: Express = express()
const port = process.env.PORT || 3000

app.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + 'html/index.html');
    // res.send('Hello')
})

app.get('/test', (req: Request, res: Response) => {
    res.send('test')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})