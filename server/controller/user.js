const User = require("../models/user")

const addUser = async (req, res) => {
    console.log("here",req.body);
    const {user}=req.body
    let newUser=new User(user);
    newUser.save();
    res.status(200).json({user:newUser})
}
module.exports={
    addUser  
}