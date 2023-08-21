import { router as indexRouter } from "../routes/index.js"
import  request from 'supertest'
import { app } from "../zghost/app/init.js"

app.use('/', indexRouter)


test('Index router works and responds with title', done =>{
    request(app)
        .get('/')
        .expect('content-type', /json/)
        .expect({ title: 'Express' })
        .expect(200, done)
})


