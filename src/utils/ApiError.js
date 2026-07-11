class ApiError extends Error {
    constructor(
        statusCode,
        message = "Internal Server Error",
        isOperational = true,
        stack = "",
        errors = []
    ) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        this.stack = stack;
        this.errors = errors;
        this.data = null;

    }
}

export default ApiError;