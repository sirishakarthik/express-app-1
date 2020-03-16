const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World! from Saisirisha!!!'));

app.get('/api/projects', (req, res) => {
    var responseToSend = [{
            "id": 1,
            "name": "Scott",
            "age": 20
        },
        {
            "id": 2,
            "name": "Elena",
            "age": 25
        },
        {
            "id": 3,
            "name": "Brandon",
            "age": 40
        },
        {
            "id": 4,
            "name": "Christina",
            "age": 50
        },
        {
            "id": 5,
            "name": "Jonathan",
            "age": 45
        }
    ];

    setTimeout(() => {
        res.send(responseToSend);
    }, 1000);

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));