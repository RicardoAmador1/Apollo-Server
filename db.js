const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb://localhost/tasksdb");
    console.log("Mongodb conectado");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
