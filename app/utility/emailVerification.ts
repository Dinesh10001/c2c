import { UserModel } from "app/models/UserModel"
import {createTransport} from "nodemailer"

const GenAccessOTPAndExpiryTime = ()=>{
    const otp = Math.floor(10000 + Math.random()*900000)
    const expiryTime = new Date()
    //getTime returns time in millisecond from 1st jan 1970
    expiryTime.setTime(new Date().getTime() + 30*60*1000)
    return {otp, expiryTime}
}

export const SendVerificationOTP = async (email:string)=>{
    const transporter = createTransport({
        service:"gmail",
        port:25,
        auth:{
            user:"dinesh.iitrpr@gmail.com",
            pass:"qzdvhovgfuakfxdy"
        }
        
    })
    const {otp, expiryTime} = GenAccessOTPAndExpiryTime()
    const res = await transporter.sendMail({
        from:"dinesh.iitrpr@gmail.com",
        to:email,
        subject:"Verification otp for C2C service",
        text:`Hii, Use this otp to verify your email ${otp}. It will expiry in 30 minutes` 

    })
    
    console.log("email res", res)

    return res

}