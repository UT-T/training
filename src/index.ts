import express, { Express, Request, Response } from 'express'
import jQuery = require('jquery');

const app: Express = express()
const port = process.env.PORT || 3000
const html = '/work/out/html/'

app.get('/', (req: Request, res: Response) => {
    res.sendFile(html+'index.html');
    // res.send('Hello')
})

app.get('/test', (req: Request, res: Response) => {
    res.sendFile(html+'test.html');
})

app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})