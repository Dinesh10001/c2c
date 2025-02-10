export declare const SuccessResponse: (data: any) => {
    statusCode: number;
    body: string;
};
export declare const ErrorResponse: (code: number | undefined, error: unknown) => {
    statusCode: number;
    body: string;
};
