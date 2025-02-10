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
exports.Payment = exports.Cart = exports.Profile = exports.Verify = exports.SignIn = exports.SignUp = void 0;
const response_1 = require("../utility/response");
const userService_1 = require("../service/userService");
const core_1 = __importDefault(require("@middy/core"));
const http_json_body_parser_1 = __importDefault(require("@middy/http-json-body-parser"));
const tsyringe_1 = require("tsyringe");
const service = tsyringe_1.container.resolve(userService_1.UserService);
exports.SignUp = (0, core_1.default)((event) => {
    return service.CreateNewUser(event);
}).use((0, http_json_body_parser_1.default)());
exports.SignIn = (0, core_1.default)((event) => {
    return service.UserLogin(event);
}).use((0, http_json_body_parser_1.default)());
// export const Verify = middy((event:APIGatewayProxyEventV2) =>{
//     return service.VerifyUser(event)
// }).use(jsonBodyParser())
const Verify = (event) => __awaiter(void 0, void 0, void 0, function* () {
    return service.VerifyUser(event);
});
exports.Verify = Verify;
const Profile = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === 'POST')
        return service.CreateProfile(event);
    else if (httpMethod === 'PUT')
        return service.UpdateProfile(event);
    else if (httpMethod === 'GET')
        return service.GetProfile(event);
    return (0, response_1.ErrorResponse)(400, "method not supported");
});
exports.Profile = Profile;
const Cart = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === 'POST')
        return service.CreateCart(event);
    else if (httpMethod === 'PUT')
        return service.UpdateCart(event);
    else if (httpMethod === 'GET')
        return service.GetCart(event);
    return (0, response_1.ErrorResponse)(400, "method not supported");
});
exports.Cart = Cart;
const Payment = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const httpMethod = event.requestContext.http.method;
    if (httpMethod === 'POST')
        return service.CreatePaymentMethod(event);
    else if (httpMethod === 'PUT')
        return service.UpdatePaymentMethod(event);
    else if (httpMethod === 'GET')
        return service.GetPaymentMethod(event);
    return (0, response_1.ErrorResponse)(400, "method not supported");
});
exports.Payment = Payment;
//# sourceMappingURL=userHandlers.js.map