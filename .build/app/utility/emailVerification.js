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
exports.SendVerificationOTP = void 0;
const nodemailer_1 = require("nodemailer");
const GenAccessOTPAndExpiryTime = () => {
    const otp = Math.floor(10000 + Math.random() * 900000);
    const expiryTime = new Date();
    //getTime returns time in millisecond from 1st jan 1970
    expiryTime.setTime(new Date().getTime() + 30 * 60 * 1000);
    return { otp, expiryTime };
};
const SendVerificationOTP = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const transporter = (0, nodemailer_1.createTransport)({
        service: "gmail",
        port: 25,
        auth: {
            user: "dinesh.iitrpr@gmail.com",
            pass: "qzdvhovgfuakfxdy"
        }
    });
    const { otp, expiryTime } = GenAccessOTPAndExpiryTime();
    const res = yield transporter.sendMail({
        from: "dinesh.iitrpr@gmail.com",
        to: email,
        subject: "Verification otp for C2C service",
        text: `Hii, Use this otp to verify your email ${otp}. It will expiry in 30 minutes`
    });
    console.log("email res", res);
    return res;
});
exports.SendVerificationOTP = SendVerificationOTP;
//# sourceMappingURL=emailVerification.js.map