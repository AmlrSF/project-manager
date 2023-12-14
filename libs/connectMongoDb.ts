import mongoose from 'mongoose';


const connectdb = async ()=>{
    let {MONGO_DB_URL} = process.env ;
    try {
        await mongoose.connect("mongodb+srv://amirsouaf2:amirsouaf2@cluster0.mrrzhik.mongodb.net/");
        console.log("connect to mongodb cluster");
    } catch (error) {
        console.log(error);
        
    }
}

export default connectdb;