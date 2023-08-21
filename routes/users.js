import { Router } from '../zghost/app/init.js'
import { json } from '../zghost/utils/http-response.js'
const router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    json(res.status(200), {users: ['jane', 'kings', 'erick']});
});

export {router};