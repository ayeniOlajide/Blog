require("dotenv").config()
const app = require("./app")
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
.then(() => {
  console.log('MongoDB is connected successfully'); 
})
.catch((error) => {
  console.log('Error connecting to DB', error)
})

app.listen(8000, () => {
  console.log('Server is connected')
});