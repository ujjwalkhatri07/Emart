const mongoose=require('mongoose');


//local server
  //  mongoose.connect('mongodb://127.0.0.1:27017/ecommerce',{ 
  // }).then((db)=>{
  //     console.log("Succesfully connected to mongodb server");
  // },(err)=>console.log(err));

  
//cloud server
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster0.4fhwc.mongodb.net/ecomm?retryWrites=true&w=majority',{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    useCreateIndex: true 
  }).then((db)=>{
      console.log("Succesfully connected to mongodb server");
  },(err)=>console.log(err));
