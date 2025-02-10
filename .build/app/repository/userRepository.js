"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const databaseClient_1 = require("../utility/databaseClient");
class UserRepository {
    constructor() { }
    CreateUserAccount(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, phone, password, salt }) {
            const client = yield (0, databaseClient_1.DBClient)();
            yield client.connect();
            console.log("db connected");
            const queryString = "INSERT INTO users(name, email, phone, password, salt) VALUES($1, $2, $3, $4, $5) RETURNING *";
            const values = [name, email, phone, password, salt];
            const result = yield client.query(queryString, values);
            yield client.end();
            console.log("db disconnected");
            if (result.rowCount) {
                return result.rows[0];
            }
        });
    }
    FindUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield (0, databaseClient_1.DBClient)();
            // try {
            yield client.connect();
            console.log("db connect");
            const queryString = "SELECT * FROM users WHERE email = $1";
            const values = [email];
            const result = yield client.query(queryString, values);
            console.log(result.rows);
            yield client.end();
            console.log("db disconnected");
            return result.rows[0];
            // } catch (error) {
            //     console.error("Error interacting with the database:", error);
            //     throw error;
            // } finally {
            //     await client.end();
            //     console.log("db disconnected");
            // }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=userRepository.js.map