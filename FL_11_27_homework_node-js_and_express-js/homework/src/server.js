const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/car', require('./routes'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
