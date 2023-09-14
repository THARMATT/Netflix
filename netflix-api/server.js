const express =require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const PORT =5000;
const app=express();
const userRoutes=require("./routes/UserRoutes")

app.use(cors());
app.use(express.json())
mongoose.connect("mongodb+srv://Netflix:clone@cluster0.s47spvc.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('connected to Mongodb');
});

app.use("/api/user",userRoutes)
app.listen( PORT,console.log(`server started at ${PORT}`))