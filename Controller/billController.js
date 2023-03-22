const asyncHandler = require("express-async-handler");

//@desc Get all bills
//@route GET /api/contacts
//@access public

const getBills = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Bills displayed"});
});

//@desc Get Single  bill
//@route GET /api/contacts/:id
//@access public

const getBill = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Bill displayed ${req.params.id}`});
});
//@desc Create Single  bill
//@route POST /api/contacts/:id
//@access public

const createBill = asyncHandler(async(req,res)=>{
    console.log("The request body is:",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All the fields are Madatory");
    }
    res.status(201).json({message:"Bill Created"});
});

//@desc Put Single  bill
//@route PUT /api/contacts/:id
//@access public

const updateBill = async(req,res)=>{
    res.status(202).json({message:`Bill Updated ${req.params.id}`});
};
//@desc Delete Single  bill
//@route DELETE /api/contacts/:id
//@access public

const deleteBill = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Bill Deleted ${req.params.id}`});
});


module.exports = {getBills,getBill,updateBill,deleteBill,createBill};