if (process.env.NODE_ENV !== "production") {
    require('dotenv').config()
}

const express = require('express')
const path = require('path')
const app = express()
const router = express.Router() //Is this even needed?

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/gameboard', (req, res) => {

})

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/404.html')
// })

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`LISTENING ON PORT: ${port}`)
})