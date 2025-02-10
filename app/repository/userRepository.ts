import { DBClient } from "../utility/databaseClient";
import { UserModel } from "../models/UserModel";
import { ErrorResponse } from "../utility/response";



export class UserRepository{
    constructor(){}

    async CreateUserAccount({name, email, phone, password, salt}:UserModel){
        const client = await DBClient();
            await client.connect();
            console.log("db connected");
        
            const queryString = "INSERT INTO users(name, email, phone, password, salt) VALUES($1, $2, $3, $4, $5) RETURNING *";
            const values = [name, email, phone, password, salt];
        
            const result = await client.query(queryString, values);
            await client.end();
            console.log("db disconnected");
            if (result.rowCount) {
                return result.rows[0] as UserModel;
            }

    }

    async FindUserByEmail(email:string){
        const client = await DBClient()
        // try {
            await client.connect()
            console.log("db connect")
            const queryString = "SELECT * FROM users WHERE email = $1"
            const values = [email]
            const result = await client.query(queryString, values)
            console.log(result.rows)
            
            await client.end();
            console.log("db disconnected");
            return result.rows[0] as UserModel
        // } catch (error) {
        //     console.error("Error interacting with the database:", error);
        //     throw error;
        // } finally {
        //     await client.end();
        //     console.log("db disconnected");
        // }
    }
}
