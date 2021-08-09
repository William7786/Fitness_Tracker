const router = require('express').Router();
const path = require ("path");

router.get("/",(req,res)=>{
    res.sendFile(path.join(_dirname,"../public/index.html"));
})

router.get("/Fit",(req,res)=>{
    res.sendFile(path.join(_dirname,"../public/exercize.html"));
})
router.get("/Stats"),(req,res)=>{
    res.sendfile(path.join(_dirname,"../public/stats.html"))
}