const express = require('express')
const cors = require('cors')
const connectDB = require('./db')
const JWT = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserModel = require('./models/User')
const { hashPassword, comparePassword } = require('./helpers/authHelper')
const { requireSignIn } = require('./middleware/authMiddleware')



//jwt secret key 
const JWT_SECRET  = "AADNADI#$%DJNID"

const app = express()

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
//database connection
connectDB()
//test route 
app.get('/test', (req,res)=>{
    res.json('test ok')
})

//to register the student
app.post('/register',async (req,res)=>{
    const {name, roll,admission,classname,section,gender,mobile,address, password}=req.body
    try {
        if (!name) {
            return res.send({ message: 'Name is Required' })
        }
        if (!roll) {
            return res.send({ message: 'roll is Required' })
        }
        if (!admission) {
            return res.send({ message: 'Admission number is Required' })
        }
        if (!classname) {
            return res.send({ message: 'Class is Required' })
        }
        if (!section) {
            return res.send({ message: 'Section is Required' })
        }
        if (!gender) {
            return res.send({ message: 'Gender is Required' })
        }
        if (!mobile) {
            return res.send({ message: 'Mobile Number is Required' })
        }
        if (!address) {
            return res.send({ message: 'Address is Required' })
        }
        if (!password) {
            return res.send({ message: 'Password is Required' })
        }
        const existingUser = await UserModel.findOne({ admission })
        //existing user 
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Already Register Please Login'
            })
        }
        const hashedPassword = await hashPassword(password)
        const user = await new UserModel({ name, roll,admission,classname,section,gender,mobile,address, password: hashedPassword }).save()
        res.status(200).send({
            success:true,
            message: "user created",
            user       
        })
    } catch (error) {
        res.status(400)
        console.log(error);
    }
})

//to login the student
app.post('/login', async (req, res) => {
    const { admission, password } = req.body

    if (!admission || !password) {
        return res.status(404).send({
            success: false,
            message: 'Invalid Admission Number or password'
        })
    }
    const user = await UserModel.findOne({ admission })
    if (!user) {
        return res.status(404).send({
            success: false,
            message: 'Admission Number is not register'
        })
    }
    const match =comparePassword(password, user.password)
    if (!match) {
        return res.status(200).send({
            success: false,
            message: 'Invalid password'
        })
    }
    //token
    
    const token = await JWT.sign({ _id: user._id,admission:user.admission,name:user.name }, JWT_SECRET, { expiresIn: '7d',
    })
    res.cookie('token',token)
    res.status(200).send({
        success: true,
        message: 'login successfully',
        user,
        token,
        
    })
})

//to update the profile of a student 
app.put('/profile',requireSignIn, async(req,res)=>{

    try {
        const { name, roll,admission,classname,section,gender,mobile,address, password } = req.body
        const user = await UserModel.findById(req.user._id)
        //password
        
        const hashedPassword = password ? await hashPassword(password) : undefined
        const updatedUser = await UserModel.findByIdAndUpdate(req.user._id, {
            name: name || user.name,
            roll:roll ||user.roll,
            admission: admission || user.admission,
            classname:classname || user.classname,
            section : section || user.section,
            gender : gender || user.gender,
            password: hashedPassword || user.password,
            mobile: mobile || user.mobile,
            address: address || user.address
        }, { new: true })

        res.status(200).send({
            success: true,
            message: "Profile Updated successfully",
            updatedUser
        })
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Error while updating profile",
            error
        })
    }
})

//to validate the whether the student is signin or not
app.get('/user-auth', requireSignIn, (req,res)=>{
    res.status(200).send({ok:true})
})


app.listen(4000,()=>{
    console.log("server is listening on post 4000")
})