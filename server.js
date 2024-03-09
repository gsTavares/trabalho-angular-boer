const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/trabalho-angular-boer/browser'));
app.use(express.urlencoded());


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/login', (req, res) => {
    const response = JSON.parse(JSON.stringify(req.body));
    res.redirect('/#/login?token=' + response.credential);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});