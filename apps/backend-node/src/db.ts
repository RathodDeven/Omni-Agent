// db.js
import mongoose from 'mongoose'
mongoose
  .connect(String(process.env.MONGO_DB_URL))
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err)
  process.exit(-1)
})

module.exports = mongoose.connection
