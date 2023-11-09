const bcrypt = require('bcrypt')


//this function to hash tha password
const hashPassword = async(password)=>{
    try{
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password,saltRounds)
        return hashedPassword
    }catch(error){
        console.log(error)
    }
}

//this function is compare the hash password
const comparePassword = async (password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}

module.exports.hashPassword = hashPassword
module.exports.comparePassword= comparePassword