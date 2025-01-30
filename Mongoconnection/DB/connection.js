const mongoose =require('mongoose');
 
const URI = "mongodb+srv://epicraez:mongoosetest@cluster0.6xdu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async ()=>{
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        tls: true, // Ensure a secure connection
      });
    console.log('db connected...!');
};


module.exports= connectDB;
