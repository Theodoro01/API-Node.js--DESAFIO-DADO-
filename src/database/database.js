//criando conexão com o banco de dados
const mongoose = require("mongoose")

const uri = 
    "mongodb+srv://Theodorovieira01:5qbCv0iY7GDNvq5H@cluster0.8oerp.mongodb.net/DesafioDado?retryWrites=true&w=majority";

mongoose.connect( uri,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// mongoose.connect('mongodb://localhost/desafio');
mongoose.Promise = global.Promise

module.exports = mongoose;