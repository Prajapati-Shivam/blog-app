const mongoose = require("mongoose");

const connection = {};
export const connectDb = async () => {
  try {
    if (connection.isConnected) {
      return;
    }
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
