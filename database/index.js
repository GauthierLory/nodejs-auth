const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gauthier:password@cluster0.u8ukc.mongodb.net/Test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('connexion ok !');
})
.catch(err => console.log(err));