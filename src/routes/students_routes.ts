import * as express from 'express';
import * as controller from '../controller/student_controller';
import auth=require("../controller/auth_flow_controller");
import print = require('../middleware/middleware')
export const router = express.Router();

var jwt = require('jsonwebtoken')

//sign in 
router.get('/signIn',   (req, res,next) => {
    console.log('---------------------------------------------------------------------------------')
    //jwt.sign(payload, secretOrPrivateKey, [options, callback])    
   
   
    var token =    jwt.sign({ data: '123' ,exp:Math.floor(Date.now() / 1000) + (60 * 60),}, '123456')
    console.log("my token here -->")
    console.log(token)


    console.log('\n verification function-->')
    var verify = jwt.verify(token, '123456',(err,token)=>{
        if(err){
            res.send("ERROR 404")
        next()
        }
    });
    console.log(verify);


    // console.log('\ndecoding of the token--->')
    // var decoded = jwt.decode(token, { complete: true });
    // console.log('headers ->', decoded.header);
    // console.log('token\'s payload ->', decoded.payload)

    res.send("Process Completed");
});

router.post('/signUp',auth.signUp);


//to create data

router.get('/create/:name', controller.createStudent)


//to retrieve complete data of Student
router.get('/', print.print, controller.getData)

//to delete student data based on ID
router.delete('/delete/:id', controller.deleteData)


//to update data:
router.put('/update/:id', controller.updateStudent)

// module.exports =router;
