import { IsEmail, IsString, Length } from "class-validator"

export class SigninInput{
    
    @IsEmail()
    email: string

    @Length(6, 15)
    password: string
    
}