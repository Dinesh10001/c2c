import { UserModel } from "../models/UserModel";
export declare class UserRepository {
    constructor();
    CreateUserAccount({ name, email, phone, password, salt }: UserModel): Promise<UserModel | undefined>;
    FindUserByEmail(email: string): Promise<UserModel>;
}
