import { ErrorResponse, SuccessResponse } from "../utility/response";
import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserRepository } from "../repository/userRepository"
import { autoInjectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { SignUpInput } from "../models/dto/SignupInput";
import { InputValidationError } from "../utility/errors";
import { GenHashedPassword, GetSalt, GetToken, ValidateInputPassword, VerifyToken } from "../utility/password";
import {SigninInput } from "../models/dto/SigninInput";
import { SendVerificationOTP } from "../utility/emailVerification";

@autoInjectable()
export class UserService {
    repository: UserRepository
    constructor(repository: UserRepository) {
        this.repository = repository
    }

    //signUp
    async CreateNewUser(event: APIGatewayProxyEventV2) {
        try {
            const input = plainToClass(SignUpInput, event.body)
            const error = await InputValidationError(input)
            if (error) return ErrorResponse(400, error)
            console.log(input)
            const isEmailValid = await SendVerificationOTP(input.email)
            if(!isEmailValid)return ErrorResponse(400, "please provide valid email")
            
            const salt = await GetSalt()
            const hashedPassword = await GenHashedPassword(input.password, salt)

            const data = await this.repository.CreateUserAccount({
                name: input.name,
                email: input.email,
                phone: input.phone,
                password: hashedPassword,
                salt: salt
            })
            return SuccessResponse(data)
        } catch (error) {
            console.log(error)
            return ErrorResponse(400, error)
        }

    }

    async UserLogin(event: APIGatewayProxyEventV2) {
        try {
            const input = plainToClass(SigninInput, event.body)
            const error = await InputValidationError(input)
            if (error) return ErrorResponse(400, error)
            console.log(input)

            const user = await this.repository.FindUserByEmail(input.email)

            const isUserPasswordValid = await ValidateInputPassword(input.password, user?.password, user?.salt)
            if(!isUserPasswordValid)return ErrorResponse(400, "please enter correct email/password")

            const token = await GetToken(user)
            return SuccessResponse({token:token})

    
        } catch (error) {
            console.log(error)
            return ErrorResponse(400, error)
        }
    }

    async VerifyUser(event: APIGatewayProxyEventV2) {
        
        if(!event.cookies)return ErrorResponse(400 ,"please login")
        const tokenString = event.cookies[0]
        
        const tokenregex = /^token=(.+)/
        const tokenValue = tokenString.match(tokenregex)
        if(!tokenValue)return ErrorResponse(400, "please login")
        console.log( "token is = ", tokenValue[1])
       
        const isUserLoggedIn = VerifyToken(tokenValue[0])

        return SuccessResponse({ message: "user successfully verified" })
    }

    async CreateProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "profile successfully created" })
    }

    async GetProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "profile successfully returned" })
    }

    async UpdateProfile(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "profile successfully updated" })
    }

    async CreateCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "cart successfully created" })
    }

    async GetCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "cart successfully returned" })
    }

    async UpdateCart(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "cart successfully updated" })
    }

    async CreatePaymentMethod(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "payment added" })
    }
    async UpdatePaymentMethod(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "payment updated" })
    }
    async GetPaymentMethod(event: APIGatewayProxyEventV2) {
        return SuccessResponse({ message: "payment returned" })
    }
}