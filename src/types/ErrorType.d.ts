export type ErrorType = {
    error: ErrorValue
    level: string,
    message: string,
    timestamp: string,
    name: string,
}

export type ErrorValue = {
    label: string;
    level: string;
    message: string;
    stack: Array<string>;
}