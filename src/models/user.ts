//Models to maintain type safety

export interface User{
    "first_name" : string,
    "last_name" : string,
    "roll_number" : string,
    "email" : string,
    "password" : string,
    "admin" : Boolean,
}

export interface Details{
    "first_name" : string,
    "last_name" : string,
    "roll_number" : string,
    "email" : string,
    "admin" : Boolean,
}

export interface LoginDetails{
    "email" : string,
    "password" : string,
}