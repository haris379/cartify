import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected Successfully");
  } catch (error) {
    console.log(`Error : ${error.message}`);
  }
};


export default connectDB;