const registerUser = async(req, res)=>{
    if(!req.body.email)
    {
        res.status(400);
        throw new Error("Please add an Email");
    }  
    res.send("Register user");
};

module.exports = {
    registerUser
}