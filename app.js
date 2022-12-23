const express = require ('express');
const app = express();
const mongoose = require('mongoose');

app.listen(process.env.PORT || 5000);

app.use(express.json());

const postRouter = require('./routes/posts');
app.use('./posts', postRouter);


mongoose.set('strictQuery', false);

mongoose.connect(
    `mongodb+srv://lehatblog:akalla@cluster0.qbe7ze4.mongodb.net/Cluster0?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log('This is connected')
    }
)
