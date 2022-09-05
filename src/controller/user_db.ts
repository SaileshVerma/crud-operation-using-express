import { AppDataSource } from '../data-source';
import { UserData } from '../entity/user_data';
const userRepo = AppDataSource.getRepository(UserData);

//to create user

export async function createUser(email:string,password:string)  {
   
    const newUserData = new UserData()
    newUserData.email = email;
    newUserData.password=password;
    await userRepo.save(newUserData)
    console.log("user added successfully")
     return newUserData;
}


export async function checkExistUser(email:string){

   var user = await userRepo.findOneBy({email:email});
   if(user){
    return true
   }

    return false;
}


// //to retrieve complete data of Student
// export const getData = async (req:Request, res:Response) => {
//     const studentRepo = AppDataSource.getRepository(Student);
//     const studentsData = await studentRepo.find()

//     // res.send("Your Data is :")
//     res.json(studentsData)
//     console.log("!!!Query Completed!!!")


// };

module.exports={createUser,checkExistUser};





