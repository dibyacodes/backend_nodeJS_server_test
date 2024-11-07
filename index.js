// Pasted from the express website, even hitesh

// EXPRESS DISCUSSES MOST IMPORTANTLY ABOUT REQUESTS AND RESPONSE
require('dotenv').config() //for production

const express = require('express') // traditional JS syntax. Common JS

const app = express() //initializing the express
const port = process.env.PORT

app.get('/', (req, res) => { // setting a get request
  res.send('Hello World!') // response
})

// Own route
app.get('/login',(request,response) => {
    response.send(`<p>You're In login Page</p>`)
})


app.listen(process.env.PORT, () => { // Listens on port, takes port as an argument and a callback function
  console.log(`Example app listening on port ${port}`)
})
