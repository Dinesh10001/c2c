import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserRepository } from "../repository/userRepository";
export declare class UserService {
    repository: UserRepository;
    constructor(repository: UserRepository);
    CreateNewUser(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    UserLogin(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    VerifyUser(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    CreateProfile(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    GetProfile(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    UpdateProfile(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    CreateCart(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    GetCart(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    UpdateCart(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    CreatePaymentMethod(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    UpdatePaymentMethod(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
    GetPaymentMethod(event: APIGatewayProxyEventV2): Promise<{
        statusCode: number;
        body: string;
    }>;
}
