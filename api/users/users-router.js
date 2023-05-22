const router=require("express").Router();
const mw=require("./users-middleware");
const userModel=require("./users-model");



router.get("/users",(res,req,next)=>{
try {
    const allUsers=userModel.getAllUsers();
    res.json(allUsers);
} catch (error) {
    next(error)
}


});

router.post("/register",mw.validatePayload,mw.validateUserNameIsUnique,(res,req,next)=>{

try {
    const insertedUser=userModel.insertUser({username:req.body.username,password:req.body.password});
    res.status(201).json(insertedUser);
} catch (error) {
    next(error)
}


});

router.post("/login",mw.validateLogin,(res,req,next)=>{
try {
    res.json({message:`hoş geldiniz, ${req.body.username}`});
} catch (error) {
    next(error);
}
});

module.exports=router;