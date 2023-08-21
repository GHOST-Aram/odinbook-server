import { router as usersRouter } from "../routes/users.js"
import  request from 'supertest'
import { app } from "../zghost/app/init.js"

app.use('/users', usersRouter)

test('Users route works', done =>{
    request(app)
        .get('/users')
        .expect('content-type', /json/)
        .expect({ users: ['jane', 'kings', 'erick']})
        .expect(200, done)
})