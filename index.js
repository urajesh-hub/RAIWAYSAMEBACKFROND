const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'))

app.get('/api/user', (req, res) => {
    res.send([{

        "id": 1,
        "name": "John",
        "age": 30
        }, 
        {
            "id": 2,
            "name": "Jane",
            "age": 25
        },
        {
            "id": 3,
            "name": "RajeshJane",
            "age": 35
        }
])
    
  });



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });