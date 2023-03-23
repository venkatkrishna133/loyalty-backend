const asyncHandler = require("express-async-handler");
const db = require("../middleware/connection");

//@desc Get all bills
//@route GET /api/contacts
//@access public

const getUsers = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"Users displayed"});
});

//@desc Get Single  bill
//@route GET /api/contacts/:id
//@access public

const getUser = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`User displayed ${req.params.id}`});
});


//@desc Create Single  bill
//@route POST /api/contacts/:id
//@access public


const createUser = asyncHandler(async (req, res) => {
    console.log("The request body is 1:", req.body);
    const {
      user_name,
      user_account_code,
      user_address_1,
      user_address_2,
      user_pin_code,
      user_city,
      user_state,
      user_country,
      user_primary_number,
      user_secondary_number,
      user_email_address,
      user_L1_employee,
      user_L2_employee,
      user_GSTIN_number,
      user_type_of_bussiness,
      user_owner_name,
      user_password
    } = req.body;
    
    console.log("The request body is 2:", req.body);
    if (!user_name || !user_account_code || !user_address_1 || !user_pin_code || !user_city || !user_state || !user_country || !user_primary_number || !user_email_address || !user_password) {
      res.status(400);
      throw new Error("All fields are mandatory");
      console.log("The request body is 3:", req.body);
    }
    
    // if (typeof user_name !== "string" || typeof user_account_code !== "string" || typeof user_address_1 !== "string" || typeof user_pin_code !== "string" || typeof user_city !== "string" || typeof user_state !== "string" || typeof user_country !== "string" || typeof user_primary_number !== "string" || typeof user_email_address !== "string" || typeof user_password !== "string") {
    //   res.status(400);
    //   throw new Error("Invalid data type");
    // }
    
    // if (!name || !email || !phone) {
    //   res.status(400);
    //   throw new Error("All fields are mandatory");
    // }
    console.log("The request body is 4:", req.body);
    // Assuming you have already set up a MySQL connection pool or client
    // await db.query('INSERT INTO users (user_name, user_account_code, user_address_1, user_address_2, user_pin_code, user_city, user_state, user_country, user_primary_number, user_secondary_number, user_email_address, user_L1_employee, user_L2_employee, user_GSTIN_number, user_type_of_bussiness, user_owner_name, user_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [user_name, user_account_code, user_address_1, user_address_2, user_pin_code, user_city, user_state, user_country, user_primary_number, user_secondary_number, user_email_address, user_L1_employee, user_L2_employee, user_GSTIN_number, user_type_of_business, user_owner_name, user_password]);
    await db.query('INSERT INTO users (user_name, user_account_code, user_address_1, user_address_2, user_pin_code, user_city, user_state, user_country, user_primary_number, user_secondary_number, user_email_address, user_L1_employee, user_L2_employee, user_GSTIN_number, user_type_of_bussiness, user_owner_name, user_password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [user_name,
      user_account_code,
      user_address_1,
      user_address_2,
      user_pin_code,
      user_city,
      user_state,
      user_country,
      user_primary_number,
      user_secondary_number,
      user_email_address,
      user_L1_employee,
      user_L2_employee,
      user_GSTIN_number,
      user_type_of_bussiness,
      user_owner_name,
      user_password]);
    // await db.query('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)', [name, email, phone]);
    console.log("The request body is 5:", req.body);
    res.status(201).json({ message: "User created successfully" });
  });

// //@desc Put Single  bill
// //@route PUT /api/contacts/:id
// //@access public

// const updateBill = async(req,res)=>{
//     res.status(202).json({message:`Bill Updated ${req.params.id}`});
// };
// //@desc Delete Single  bill
// //@route DELETE /api/contacts/:id
// //@access public

// const deleteBill = asyncHandler(async(req,res)=>{
//     res.status(200).json({message:`Bill Deleted ${req.params.id}`});
// });


module.exports = {getUsers,getUser,createUser};