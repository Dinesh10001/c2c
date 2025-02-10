import { Length, IsString } from "class-validator";
import { SigninInput } from "./SigninInput";

export class SignUpInput extends SigninInput{
    
    @IsString()
    name: string
    
    @Length(10, 13)
    phone: string
}