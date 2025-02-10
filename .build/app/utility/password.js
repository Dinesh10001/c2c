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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = exports.GetToken = exports.ValidateInputPassword = exports.GenHashedPassword = exports.GetSalt = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "abcdefg";
const GetSalt = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.genSalt();
});
exports.GetSalt = GetSalt;
const GenHashedPassword = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt_1.default.hash(password, salt);
});
exports.GenHashedPassword = GenHashedPassword;
const ValidateInputPassword = (enteredPassword, savedPassword, salt) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield (0, exports.GenHashedPassword)(enteredPassword, salt);
    return hashedPassword === savedPassword;
});
exports.ValidateInputPassword = ValidateInputPassword;
const GetToken = (_a) => __awaiter(void 0, [_a], void 0, function* ({ name, email, phone }) {
    const token = jsonwebtoken_1.default.sign({ name, email, phone }, SECRET_KEY);
    // console.log("token", token)
    return token;
});
exports.GetToken = GetToken;
const VerifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token !== "") {
            const payload = yield jsonwebtoken_1.default.verify(token, SECRET_KEY);
            // const user = await FindUserByEmail(payload.email);
            // if(user)return true;
            console.log("decoded is = ", payload);
            return payload;
        }
        return false;
    }
    catch (error) {
        console.log(error);
        return false;
    }
});
exports.VerifyToken = VerifyToken;
//# sourceMappingURL=password.js.map