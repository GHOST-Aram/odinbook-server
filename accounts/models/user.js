import { Model, ModelSchema } from "../../zghost/db/model.js";

const userSchema = new ModelSchema({
    first_name: {
        type: String,
        minlength:2,
        maxlength:50
        
    },
    last_name:  {
        type: String,
        minlength:2,
        maxlength:50
        
    },
    password: {
            type: String,
            minlength:8,            
        },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    username: {
        type: String,
        minlength: 2,
        maxlength: 50
    }
})

export const User = new Model('User', userSchema) 