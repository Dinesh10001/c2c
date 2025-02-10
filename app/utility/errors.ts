import { ValidationError , validate} from "class-validator";

//it will validate inputs according to provided conditions
export const InputValidationError = async (input:any): Promise<ValidationError[] | false> =>{
    const error = await validate(input, {ValidationError :{target:true}})
    if(error.length>0)return error
    return false
} 