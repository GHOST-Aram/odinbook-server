import { app } from './zghost/app/init.js';
import { config } from './zghost/app/config.js';
import {router as indexRouter} from './routes/index.js'
import {router as usersRouter} from './routes/users.js'
import {error500, error404} from './zghost/utils/errors.js'

config()

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(error404)
app.use(error500)

export {app};
