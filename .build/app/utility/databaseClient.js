"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBClient = void 0;
const pg_1 = require("pg");
const DBClient = () => {
    return new pg_1.Client({
        host: "127.0.0.1",
        port: 5432,
        user: "root",
        password: " root",
        database: " user_service",
    });
};
exports.DBClient = DBClient;
//# sourceMappingURL=databaseClient.js.map