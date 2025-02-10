import { ValidationError } from "class-validator";
export declare const InputValidationError: (input: any) => Promise<ValidationError[] | false>;
