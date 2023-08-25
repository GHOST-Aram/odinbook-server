import { Router } from "../../zghost/app/init.js";
import { register_user } from "../controllers/register.js";

const router = Router()

const routesWrapper = (db) =>{
    router.post('/user', register_user(db))

    return router
}

export default routesWrapper //For testing with mock db functions
