require("./modules");
const express=require("express");
const app=express();
const PORT=8080;
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
const movieRoutes=require("./routes/movieRoutes");
app.set("view engine","ejs");
app.use("/api/movies",movieRoutes);
app.get("/",(req,res)=>{
    res.render("dashboard.ejs");
})
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
})