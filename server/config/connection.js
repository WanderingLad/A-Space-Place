const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://admin:alphabetsoup@a-space-place.lixpj49.mongodb.net/?retryWrites=true&w=majority',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  } 
).then(() => {console.log('connected')});

module.exports = mongoose.connection;

