import { UserModel } from 'app/models/UserModel';
export declare const GetSalt: () => Promise<string>;
export declare const GenHashedPassword: (password: string, salt: string) => Promise<string>;
export declare const ValidateInputPassword: (enteredPassword: string, savedPassword: any, salt: any) => Promise<boolean>;
export declare const GetToken: ({ name, email, phone }: UserModel) => Promise<string>;
export declare const VerifyToken: (token: string) => Promise<UserModel | boolean>;
