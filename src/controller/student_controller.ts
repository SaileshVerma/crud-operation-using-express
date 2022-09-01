import { AppDataSource } from '../data-source';
import { Student } from '../entity/student';
import {  Request, Response } from 'express';



//to create data
export const createStudent = async (req:Request, res:Response) => {
    var studentName = req.params.name;

    const studentRepo = AppDataSource.getRepository(Student);
    const studentData = new Student()
    studentData.name = studentName
    await studentRepo.save(studentData)
    res.send("Data Of Student Added Successfully")
    console.log("added successfully")
}


//to retrieve complete data of Student
export const getData = async (req:Request, res:Response) => {
    const studentRepo = AppDataSource.getRepository(Student);
    const studentsData = await studentRepo.find()

    // res.send("Your Data is :")
    res.json(studentsData)
    console.log("!!!Query Completed!!!")


};

//to delete student data based on ID
export const deleteData = async (req:Request, res:Response) => {
    const studentRepo = AppDataSource.getRepository(Student);

    const dataTobeDeleted = await studentRepo.findOneBy({
        id: parseInt(req.params.id),
    })

    await studentRepo.remove(dataTobeDeleted);
    res.send("Data Deleted Successfully")
    console.log("Data Deleted Successfully");


}


//to update data:
export const updateStudent = async (req:Request, res:Response) => {
    const studentRepo = AppDataSource.getRepository(Student);
    const loadedData = await studentRepo.findOneBy({
        id: parseInt(req.params.id),
    })
    //let suppose data for update is coming from body
    const updatedName = req.body.name;

    loadedData.name = updatedName;

    await studentRepo.save(loadedData);
    res.send("Data Updated Successfully")
    console.log("Data Updated Successfully")
}

