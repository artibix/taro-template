// src/types/api.ts

export interface ResponseData<T> {
    code: number
    message: string
    data: T
}
