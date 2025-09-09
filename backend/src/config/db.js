import mongoose from "mongoose" 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI , {
            // useNewUrlParser : true,
            // useUnifiedTopology : true,
        })
    
        console.log("MONGO DB connect successfully ")
    
    
    
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);  // exit failure if 1 is failure and if it is 0 its success
        
    }
}



export default connectDB