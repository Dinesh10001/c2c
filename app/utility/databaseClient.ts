import { Client } from "pg";

export const DBClient = ()=>{
    return new Client({
        host: "127.0.0.1",
        port:5432,
        user: "root",
        password: " root",
        database: " user_service",
    })
}