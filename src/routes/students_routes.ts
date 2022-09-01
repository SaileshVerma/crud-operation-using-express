import * as express from 'express';
import * as controller from '../controller/student_controller';

 export const router=express.Router();

    //to create data

    router.get('/create/:name',controller.createStudent)


    //to retrieve complete data of Student
    router.get('/', controller.getData)

    //to delete student data based on ID
    router.delete('/delete/:id', controller.deleteData)


    //to update data:
    router.put('/update/:id',controller.updateStudent)

// module.exports =router;
   