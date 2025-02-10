const formateResponse = (statusCode: number, message: string, data: object) => {
  console.log("coming tttt", data);
 
  //return data;

    return {
      statusCode:201,
      body: JSON.stringify({
        data,
      })
  }
}

export const SuccessResponse = (data: any) => formateResponse(100, "success", data)

export const ErrorResponse = (code = 500, error: unknown) => {
  if (Array.isArray(error)) {
    const errorObject = error[0].constraints
    const errorMessage = errorObject[Object.keys(errorObject)[0]] || "Error occured"
    return formateResponse(code, errorMessage, errorMessage)
  }
  return formateResponse(code, "error", {error})
}