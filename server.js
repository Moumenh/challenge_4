const express = require('express')


const app = express()

app.use(express.urlencoded({ extended: true })) // to parse the data
app.use(express.json()) // to make the content header     application/json

app.use(express.static(__dirname + '/./public'));


app.listen(3000, () =>{
    console.log('listening' )
})

