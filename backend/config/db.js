import mongoose from "mongoose";

const connectdb = async () => {
  try {
    // Ensure the environment variable is set
    if (!process.env.MONGO_URL) {
      console.error("MONGO_URL is not defined in environment variables.");
      process.exit(1);
    }

    // Connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "PROJECT_ZERO",
    });

    console.log(`MongoDB connected at host: ${conn.connection.host}, database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectdb;