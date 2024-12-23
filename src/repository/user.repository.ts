import connectDB from "../data-source";
import { User } from "../entities/users";

const userRepository = connectDB.getRepository(User);

export const findUserByEmail = async (email: string) => {
    return await userRepository.findOneBy({ email });
};


export const saveUser = async (userData: Partial<User>): Promise<User> => { 
const newUser = userRepository.create(userData);
return await userRepository.save(newUser);    
}



export const findUserWithRoles = async (userId: string) => {
    const user = await userRepository.findOne({ where: { id: userId } });
    return user;
};