const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Mongo is Connected");
})
.catch( (err) => {
    console.error(err);
})