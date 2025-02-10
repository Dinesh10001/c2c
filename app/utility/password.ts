import { UserModel } from 'app/models/UserModel';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SECRET_KEY = "abcdefg"
export const GetSalt = async () => {
    return await bcrypt.genSalt();
}

export const GenHashedPassword = async (password: string, salt: string) => {
    return await bcrypt.hash(password, salt)
}

export const ValidateInputPassword = async (enteredPassword: string, savedPassword: any, salt: any) => {
    const hashedPassword = await GenHashedPassword(enteredPassword, salt)
    return hashedPassword === savedPassword

}

export const GetToken = async ({ name, email, phone }: UserModel) => {
    const token = jwt.sign({ name, email, phone }, SECRET_KEY)
    // console.log("token", token)
    return token
}

export const VerifyToken = async (token: string): Promise<UserModel | boolean> => {
    try {
        if (token !== "") {
            const payload = await jwt.verify(token, SECRET_KEY)
            // const user = await FindUserByEmail(payload.email);
            // if(user)return true;
            console.log("decoded is = ", payload)
            return payload as UserModel
        }
        return false
    } catch (error) {
        console.log(error)
        return false
    }
}