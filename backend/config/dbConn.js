const mongoose=require('mongoose');
const DB_URI="mongodb+srv://nguyenhongkien123tk:2604kjenQ@cluster0.x7rjkto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB=async()=>{
    try{
        await mongoose.connect(DB_URI);
    }
    catch(err){
        console.log(err)
    }
}
module.exports=connectDB;