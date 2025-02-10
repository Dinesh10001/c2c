import { ErrorResponse } from "../utility/response";
import { UserService } from "../service/userService";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import { container } from "tsyringe";

const service = container.resolve(UserService)


export const SignUp = middy((event:APIGatewayProxyEventV2) =>{
    return service.CreateNewUser(event)
}).use(jsonBodyParser())

export const SignIn = middy((event:APIGatewayProxyEventV2) =>{
    return service.UserLogin(event)
}).use(jsonBodyParser())


// export const Verify = middy((event:APIGatewayProxyEventV2) =>{
//     return service.VerifyUser(event)
// }).use(jsonBodyParser())

export const Verify = async(event:APIGatewayProxyEventV2) =>{
    return service.VerifyUser(event)
}

export const Profile = async(event:APIGatewayProxyEventV2) =>{
    const httpMethod = event.requestContext.http.method
    if(httpMethod==='POST')return service.CreateProfile(event)
    else if(httpMethod==='PUT')return service.UpdateProfile(event)
    else if(httpMethod==='GET')return service.GetProfile(event)
    
    return ErrorResponse(400, "method not supported")
}
export const Cart = async(event:APIGatewayProxyEventV2) =>{
    const httpMethod = event.requestContext.http.method
    if(httpMethod==='POST')return service.CreateCart(event)
    else if(httpMethod==='PUT')return service.UpdateCart(event)
    else if(httpMethod==='GET')return service.GetCart(event)
    
    return ErrorResponse(400, "method not supported")
}
export const Payment = async(event:APIGatewayProxyEventV2) =>{
    const httpMethod = event.requestContext.http.method
    if(httpMethod==='POST')return service.CreatePaymentMethod(event)
    else if(httpMethod==='PUT')return service.UpdatePaymentMethod(event)
    else if(httpMethod==='GET')return service.GetPaymentMethod(event)
    
    return ErrorResponse(400, "method not supported")
}
