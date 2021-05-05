
const express = require('express');
const port = '3030'
const app = express();
 
// hello

 app.get('/',(req, res)=>{
    res.json(
        [
            {id: 1},
            {id: 2},
            {id: 3}
        ]
    )
});

app.listen(port, () => {
    console.log('this server is running on port 3030');
});

module.exports = app;




