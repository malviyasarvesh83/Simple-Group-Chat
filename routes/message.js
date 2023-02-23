const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = require('./data.js');
const login = require('./login.js');


router.get('/', (req, res, next) => {
    res.send(`
        <h1>${data}</h1>
        <form 
            onsubmit="document.getElementById('username').value=localStorage.getItem('username')"
            action="/" method="POST">
            <input type="text" name="message">
            <input type="hidden" name="username" id="username">
            <button type="submit">Send Message</button>
        </form>`
    );
})

router.post("/", (req, res, next) => {
  console.log("request : ", req.body);
  data.push(`${req.body.username}:${req.body.message}`);
  console.log('Data : ', data);
  res.redirect("/");
});

module.exports = router;