import { APIGatewayProxyEventV2 } from "aws-lambda";
import middy from "@middy/core";
export declare const SignUp: middy.MiddyfiedHandler<import("@middy/http-json-body-parser").RequestEvent & APIGatewayProxyEventV2, {
    statusCode: number;
    body: string;
}, Error, import("aws-lambda").Context, {}>;
export declare const SignIn: middy.MiddyfiedHandler<import("@middy/http-json-body-parser").RequestEvent & APIGatewayProxyEventV2, {
    statusCode: number;
    body: string;
}, Error, import("aws-lambda").Context, {}>;
export declare const Verify: (event: APIGatewayProxyEventV2) => Promise<{
    statusCode: number;
    body: string;
}>;
export declare const Profile: (event: APIGatewayProxyEventV2) => Promise<{
    statusCode: number;
    body: string;
}>;
export declare const Cart: (event: APIGatewayProxyEventV2) => Promise<{
    statusCode: number;
    body: string;
}>;
export declare const Payment: (event: APIGatewayProxyEventV2) => Promise<{
    statusCode: number;
    body: string;
}>;
