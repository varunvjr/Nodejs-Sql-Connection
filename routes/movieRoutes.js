const express=require("express");
const router=express.Router();
const Movie=require("../modules/movies");
router.get("/",(req,res)=>{
    res.render("home");
})
router.post("/",async(req,res)=>{
    const {ID,movieName,date}=req.body;
    await Movie.query(`INSERT INTO MOVIE VALUES("${ID}","${movieName}","${date}")`,(err,res)=>{
        if(err){console.log(err)}
        console.log("Row has been inserted successfully");
    });
    res.redirect("/api/movies");
})
router.get("/allMovies",async(req,res)=>{
    const movieName=req.params.name;
    await Movie.query(`SELECT * FROM MOVIE ORDER BY RELEASE_DATE DESC`,(err,result)=>{
        if(err){
            throw err;
        }
        if(result.length>0)
            res.json(result);
        res.send("No Movies Found");
    })
})
router.get("/:name",async(req,res)=>{
    const movieName=req.params.name;
    await Movie.query(`SELECT * FROM MOVIE WHERE MOVIE_NAME="${movieName}" ORDER BY RELEASE_DATE DESC`,(err,result)=>{
        if(err){
            throw err;
        }
        if(result.length>0)
            res.json(result);
        res.send("No Movies Found");
    })
})
module.exports=router;