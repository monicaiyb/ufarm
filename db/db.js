const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ufarm_project",{
  useNewUrlParser: true,
  useUnifiedTopology: true
  },
  function(err) {
    if (err) throw err;
    console.log("Successfully connected");
  });