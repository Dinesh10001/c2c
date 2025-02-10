"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = exports.SuccessResponse = void 0;
const formateResponse = (statusCode, message, data) => {
    console.log("coming tttt", data);
    //return data;
    return {
        statusCode: 201,
        body: JSON.stringify({
            data,
        })
    };
};
const SuccessResponse = (data) => formateResponse(100, "success", data);
exports.SuccessResponse = SuccessResponse;
const ErrorResponse = (code = 500, error) => {
    if (Array.isArray(error)) {
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error occured";
        return formateResponse(code, errorMessage, errorMessage);
    }
    return formateResponse(code, "error", { error });
};
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=response.js.map