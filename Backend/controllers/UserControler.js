import User from '../models/userModels.js';
import generateToken from '../config/generateToken.js';


const registerUser = async(req,res) => {
    try {
        //console.log('requestBody',req.body);
        const {name, email, password, about} = req.body;
        const userExists = await User.findOne ({email, password});
        if ( userExists) {
            res.status(400).json({
                result: " user is already exist"
            })
        }
        const user = await User.create({
            name: name,
            email: email,
            password: password,
        })
       
      if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
      
        
      }
    } catch(error) {
        //console.log('error',error);
    }
};

const loginUser = async(req,res) =>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (user) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                about: user.about,
                role: user.role,
                token: generateToken(user._id)
            })
        } else {
            res.status(401).json({
                result: "failed due to invalid username or password"
            })
        }
    } catch (error) {
        console.log(error)
    }
};

export {registerUser, loginUser};