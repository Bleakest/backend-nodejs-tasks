const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express(); 
const port = process.env.PORT || 4000; 
const User = require('./models/User')


mongoose.connect('mongodb+srv://ivan:qwe123@cluster0.e43xl.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0').then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`)); 
})

app.post('/form', async (req, res) => { 
    console.log(req.body.name, req.body.number, req.body.problem);
    
    // await User.create(req.body.name, req.body.number, req.body.problem)
    res.redirect('/form')
}); 
app.get('/form', async (req, res) => { 
    res.send({express: 'message from express'})
}); 