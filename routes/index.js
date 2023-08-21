import { Router } from '../zghost/app/init.js'
import { json } from '../zghost/utils/http-response.js'
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	json(res.status(200),{ title: 'Express' });
});

export {router};