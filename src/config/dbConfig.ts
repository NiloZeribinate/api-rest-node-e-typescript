const mongoose = require('mongoose');

const uri = "mongodb://adm:123@localhost:27017/notes";

const connection = mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export { connection };
